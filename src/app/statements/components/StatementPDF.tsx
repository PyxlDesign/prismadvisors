import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Svg,
  Path,
  Polygon,
} from "@react-pdf/renderer";
import type { StatementData } from "../lib/parseXlsx";

const borderColor = "#222";

const s = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 9,
    fontFamily: "Helvetica",
    color: "#1a1a1a",
  },
  // Header
  logoRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 8,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 24,
  },
  statementBox: {
    padding: 10,
    paddingRight: 20,
    flex: 1,
  },
  statementTitle: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    textDecoration: "underline",
    marginBottom: 6,
  },
  clientName: {
    fontSize: 10,
  },
  datebox: {
    paddingHorizontal: 12,
    paddingTop: 10,
    flex: 0.6,
  },
  dateLabel: {
    fontFamily: "Helvetica-Bold",
    textDecoration: "underline",
    marginBottom: 2,
  },
  propertyBox: {
    paddingHorizontal: 12,
    paddingTop: 10,
    flex: 1,
  },
  // Table
  table: {
    marginTop: 12,
  },
  tableHeaderRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
    paddingBottom: 4,
    marginBottom: 4,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  colDate: { width: "12%" },
  colRef: { width: "36%" },
  colInvoice: { width: "18%", textAlign: "right" },
  colPayments: { width: "16%", textAlign: "right" },
  colBalance: { width: "18%", textAlign: "right" },
  headerText: {
    fontFamily: "Helvetica-Bold",
    textDecoration: "underline",
    fontSize: 9,
  },
  // Balance footer
  balanceFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 4,
    paddingTop: 6,
    borderTopWidth: 1.5,
    borderTopColor: borderColor,
  },
  balanceFooterText: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
  },
  // Payment info
  paymentSection: {
    marginTop: 28,
    maxWidth: "75%",
  },
  paymentTitle: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    textDecoration: "underline",
    marginBottom: 8,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 6,
    paddingRight: 20,
  },
  bulletDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#0f172a",
    marginRight: 8,
    marginTop: 2,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    lineHeight: 1.4,
  },
});

function fmt(n: number | null): string {
  if (n === null) return "";
  const abs = Math.abs(n);
  const formatted = abs.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return n < 0 ? `(${formatted})` : formatted;
}

function PointWestLogoSvg() {
  return (
    <Svg viewBox="0 0 366.14 25.73" style={{ width: 200, height: 14 }}>
      <Path
        fill="#1a1a1a"
        d="M23.93,10.43H18.76v7.05H24C26.59,17.48,28,16.3,28,14s-1.49-3.52-4.11-3.52Zm10,3.29c0,5.52-4.27,8.46-10.11,8.46h-5V29H13.08V5.53H24.2c6,0,9.72,3.06,9.72,8.19Z"
        transform="translate(-13.08 -4.65)"
      />
      <Path
        fill="#1a1a1a"
        d="M73.08,17.28a6.7,6.7,0,1,0-13.39,0,6.7,6.7,0,1,0,13.39,0Zm-19.27,0C53.81,10.54,58.55,5,66.35,5S79,10.54,79,17.28,74.22,29.54,66.35,29.54,53.81,24,53.81,17.28Z"
        transform="translate(-13.08 -4.65)"
      />
      <Polygon
        fill="#1a1a1a"
        points="93.03 24.38 87.35 24.38 87.35 0.88 90.19 0.88 93.03 0.88 93.03 24.38"
      />
      <Polygon
        fill="#1a1a1a"
        points="138.66 24.38 137.36 24.38 122.17 11.42 122.17 24.38 116.52 24.38 116.52 0.88 117.82 0.88 133.01 13.34 133.01 0.92 138.66 0.92 138.66 24.38"
      />
      <Polygon
        fill="#1a1a1a"
        points="158.49 0.88 181.1 0.88 180 5.78 172.81 5.78 172.81 24.38 167.13 24.38 167.13 5.78 159.86 5.78 158.49 0.88"
      />
      <Path
        fill="#1a1a1a"
        d="M211.4,11.8a2.5,2.5,0,1,1,2.5-2.5,2.5,2.5,0,0,1-2.5,2.5Zm0-7.12A4.62,4.62,0,1,0,216,9.3a4.61,4.61,0,0,0-4.62-4.62Z"
        transform="translate(-13.08 -4.65)"
      />
      <Polygon
        fill="#4a4a4a"
        points="253.2 0.64 253.2 0.93 243.84 25.73 243.56 25.73 235.26 6.27 226.76 25.73 226.51 25.73 217.15 0.93 217.15 0.64 220.17 0.64 226.93 19.23 235.09 0 235.38 0 243.59 19.2 250.31 0.64 253.2 0.64"
      />
      <Path
        fill="#4a4a4a"
        d="M319.8,27.13V24.24a21,21,0,0,0,10.9,3.21c5.08,0,8.46-1.7,8.46-4.47s-2.48-3.54-5.6-4l-5.18-.64c-4.37-.58-8.46-1.74-8.46-6.24,0-4.28,4.22-7.14,10.55-7.14A22,22,0,0,1,340.8,7.61v3a20,20,0,0,0-10.2-3C326,7.58,323,9.34,323,12s2.76,3.32,6.11,3.8l5.21.67c4.21.55,7.91,2,7.91,6.37s-4.53,7.24-11.35,7.24c-4.18,0-8.59-1.19-11-2.93Z"
        transform="translate(-13.08 -4.65)"
      />
      <Polygon
        fill="#4a4a4a"
        points="366.14 3.15 356.3 3.15 356.3 25.09 353.4 25.09 353.4 3.15 343.49 3.15 343.49 0.64 366.14 0.64 366.14 3.15"
      />
      <Polygon
        fill="#4a4a4a"
        points="272.61 22.58 272.61 21.75 272.61 21.75 272.61 3.16 272.61 3.16 272.61 3.15 289.85 3.15 289.85 0.64 269.72 0.64 269.72 25.09 290.2 25.09 290.2 22.58 272.61 22.58"
      />
      <Polygon
        fill="#4a4a4a"
        points="287.09 11.29 275.74 11.29 275.74 13.77 285.88 13.77 287.09 11.29"
      />
    </Svg>
  );
}

export default function StatementPDF({ data }: { data: StatementData }) {
  const lastItem = data.lineItems[data.lineItems.length - 1];
  const finalBalance = lastItem?.balanceUSD ?? 0;

  return (
    <Document>
      <Page size="A4" style={s.page}>
        {/* Logo */}
        <View style={s.logoRow}>
          <PointWestLogoSvg />
        </View>

        {/* Header: Statement box + date + property */}
        <View style={s.headerRow}>
          <View style={s.statementBox}>
            <Text style={s.statementTitle}>STATEMENT</Text>
            <Text style={s.clientName}>{data.clientName}</Text>
          </View>
          <View style={s.datebox}>
            <Text style={s.dateLabel}>Statement Date</Text>
            <Text>{data.statementDate}</Text>
          </View>
          <View style={s.propertyBox}>
            <Text>Seagrape - Point West Rental Pool</Text>
            <Text>CAYMAN ISLANDS</Text>
          </View>
        </View>

        {/* Table */}
        <View style={s.table}>
          {/* Header row */}
          <View style={s.tableHeaderRow}>
            <View style={s.colDate}>
              <Text style={s.headerText}>Date</Text>
            </View>
            <View style={s.colRef}>
              <Text style={s.headerText}>Reference</Text>
            </View>
            <View style={s.colInvoice}>
              <Text style={s.headerText}>Invoice Amount</Text>
            </View>
            <View style={s.colPayments}>
              <Text style={s.headerText}>Payments</Text>
            </View>
            <View style={s.colBalance}>
              <Text style={s.headerText}>Balance USD</Text>
            </View>
          </View>

          {/* Data rows */}
          {data.lineItems.map((item, i) => (
            <View key={i} style={s.tableRow}>
              <View style={s.colDate}>
                <Text>{item.date}</Text>
              </View>
              <View style={s.colRef}>
                <Text>{item.reference}</Text>
              </View>
              <View style={s.colInvoice}>
                <Text>{fmt(item.invoiceAmount)}</Text>
              </View>
              <View style={s.colPayments}>
                <Text>{fmt(item.payments)}</Text>
              </View>
              <View style={s.colBalance}>
                <Text>{fmt(item.balanceUSD)}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Balance footer */}
        <View style={s.balanceFooter}>
          <Text style={s.balanceFooterText}>
            Balance Due / (Credit Due to Owner) USD {fmt(finalBalance)}
          </Text>
        </View>

        {/* Payment Information */}
        <View style={s.paymentSection}>
          <Text style={s.paymentTitle}>Payment Information for Owners:</Text>
          <View style={s.bullet}>
            <View style={s.bulletDot} />
            <Text style={s.bulletText}>
              Please note credits due to owners are paid out quarterly (10-15
              days after quarter end statements are sent) if your payment details
              are on file.
            </Text>
          </View>
          <View style={s.bullet}>
            <View style={s.bulletDot} />
            <Text style={s.bulletText}>
              If you&apos;d like us to transfer funds to cover your outstanding strata
              bill, please reply to this email to advise us and give us
              permission to do so.
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
