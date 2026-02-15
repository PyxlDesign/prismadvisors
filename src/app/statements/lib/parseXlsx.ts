import * as XLSX from "xlsx";

export interface StatementData {
  clientName: string;
  propertyInfo: string[];
  statementDate: string;
  lineItems: LineItem[];
}

export interface LineItem {
  date: string;
  reference: string;
  invoiceAmount: number | null;
  payments: number | null;
  balanceUSD: number | null;
}

/**
 * Search column A for the owner name around row 7 (0-indexed row 6).
 * Falls back to scanning A1–A20 for the first non-empty cell that looks like a name.
 */
function findClientName(sheet: XLSX.WorkSheet): string {
  // Try A7 first (PLAN.md says owner name is typically in A7)
  const a7 = sheet["A7"];
  if (a7 && String(a7.v).trim()) return String(a7.v).trim();

  // Scan nearby rows
  for (let r = 1; r <= 20; r++) {
    const cell = sheet[`A${r}`];
    if (cell && String(cell.v).trim()) {
      return String(cell.v).trim();
    }
  }
  return "Unknown Client";
}

/**
 * Find the header row by looking for a row containing "Date" and "Amount" (or similar).
 * Returns the 1-based row number and column mapping.
 */
function findHeaderRow(sheet: XLSX.WorkSheet): {
  headerRow: number;
  colMap: Record<string, number>;
} {
  const range = XLSX.utils.decode_range(sheet["!ref"] || "A1");

  for (let r = range.s.r; r <= range.e.r; r++) {
    const rowValues: string[] = [];
    for (let c = range.s.c; c <= range.e.c; c++) {
      const addr = XLSX.utils.encode_cell({ r, c });
      const cell = sheet[addr];
      rowValues[c] = cell ? String(cell.v).trim().toLowerCase() : "";
    }

    const hasDate = rowValues.some((v) => v === "date");
    const hasAmount = rowValues.some(
      (v) =>
        v.includes("amount") ||
        v.includes("invoice") ||
        v.includes("description") ||
        v.includes("reference")
    );

    if (hasDate && hasAmount) {
      const colMap: Record<string, number> = {};
      rowValues.forEach((val, idx) => {
        if (val === "date") colMap.date = idx;
        else if (val.includes("reference") || val.includes("description"))
          colMap.reference = idx;
        else if (val.includes("invoice") || val === "amount")
          colMap.invoiceAmount = idx;
        else if (val.includes("payment")) colMap.payments = idx;
        else if (val.includes("balance")) colMap.balanceUSD = idx;
      });
      return { headerRow: r, colMap };
    }
  }

  throw new Error(
    "Could not find a header row with Date and Amount/Reference columns."
  );
}

function getCellString(sheet: XLSX.WorkSheet, r: number, c: number): string {
  const addr = XLSX.utils.encode_cell({ r, c });
  const cell = sheet[addr];
  if (!cell) return "";
  if (cell.t === "d" || cell.t === "n") {
    // Check if it's a date by seeing if the format looks date-like
    if (cell.w) return cell.w;
  }
  return String(cell.v ?? "").trim();
}

function getCellNumber(
  sheet: XLSX.WorkSheet,
  r: number,
  c: number
): number | null {
  const addr = XLSX.utils.encode_cell({ r, c });
  const cell = sheet[addr];
  if (!cell || cell.v === "" || cell.v === undefined || cell.v === null)
    return null;
  const num = typeof cell.v === "number" ? cell.v : parseFloat(String(cell.v));
  return isNaN(num) ? null : num;
}

export function parseXlsx(data: ArrayBuffer): StatementData {
  const workbook = XLSX.read(data, { type: "array", cellDates: true });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  const clientName = findClientName(sheet);
  const { headerRow, colMap } = findHeaderRow(sheet);
  const range = XLSX.utils.decode_range(sheet["!ref"] || "A1");

  // Gather property info from column A rows above the header (skip the client name row)
  const propertyInfo: string[] = [];
  for (let r = 0; r <= range.e.r; r++) {
    if (r === 6) continue; // skip A7 (client name)
    if (r >= headerRow) break;
    const val = getCellString(sheet, r, 0);
    if (val) propertyInfo.push(val);
  }

  // Parse line items from rows below the header
  const lineItems: LineItem[] = [];
  for (let r = headerRow + 1; r <= range.e.r; r++) {
    const date = colMap.date !== undefined ? getCellString(sheet, r, colMap.date) : "";
    const reference =
      colMap.reference !== undefined
        ? getCellString(sheet, r, colMap.reference)
        : "";

    // Skip completely empty rows
    if (!date && !reference) continue;

    const invoiceAmount =
      colMap.invoiceAmount !== undefined
        ? getCellNumber(sheet, r, colMap.invoiceAmount)
        : null;
    const payments =
      colMap.payments !== undefined
        ? getCellNumber(sheet, r, colMap.payments)
        : null;
    const balanceUSD =
      colMap.balanceUSD !== undefined
        ? getCellNumber(sheet, r, colMap.balanceUSD)
        : null;

    lineItems.push({ date, reference, invoiceAmount, payments, balanceUSD });
  }

  // Use today as statement date if not found in the sheet
  const today = new Date();
  const statementDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  });

  return { clientName, propertyInfo, statementDate, lineItems };
}
