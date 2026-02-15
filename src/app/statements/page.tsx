"use client";

import { useState, useCallback, useEffect } from "react";
import { parseXlsx, type StatementData } from "./lib/parseXlsx";
import { verifyPassword, isAuthenticated } from "./lib/auth";

export default function StatementsPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);
  const [data, setData] = useState<StatementData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  useEffect(() => {
    setAuthed(isAuthenticated());
  }, []);

  const handleLogin = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const ok = await verifyPassword(password);
      if (ok) {
        setAuthed(true);
        setAuthError(false);
      } else {
        setAuthError(true);
      }
    },
    [password]
  );

  const processFile = useCallback(async (file: File) => {
    setError(null);
    setData(null);
    try {
      const buffer = await file.arrayBuffer();
      const parsed = parseXlsx(buffer);
      setData(parsed);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to parse file.");
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) processFile(file);
    },
    [processFile]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) processFile(file);
    },
    [processFile]
  );

  const handleDownload = useCallback(async () => {
    if (!data) return;
    setGenerating(true);
    try {
      // Dynamic imports to avoid SSR issues with @react-pdf/renderer
      const [{ pdf }, { default: StatementPDF }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("./components/StatementPDF"),
      ]);
      const blob = await pdf(<StatementPDF data={data} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${data.clientName} - Statement.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to generate PDF.");
    } finally {
      setGenerating(false);
    }
  }, [data]);

  const handleReset = useCallback(() => {
    setData(null);
    setError(null);
  }, []);

  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-8">Prism Advisors</h1>
        <form onSubmit={handleLogin} className="w-full max-w-xs space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setAuthError(false);
            }}
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            autoFocus
          />
          {authError && (
            <p className="text-red-600 text-sm">Incorrect password.</p>
          )}
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white rounded-lg py-2.5 font-medium hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            Log In
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-12">
      <h1 className="text-2xl font-semibold text-gray-800">Prism Advisors</h1>
      <p className="text-gray-500 mb-8">Statement Generator</p>

      {!data ? (
        <>
          <label
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            className={`w-full max-w-lg border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors ${
              dragOver
                ? "border-emerald-500 bg-emerald-50"
                : "border-gray-300 hover:border-gray-400 bg-white"
            }`}
          >
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFileInput}
              className="hidden"
            />
            <p className="text-gray-600 text-lg mb-2">
              Drop your <span className="font-medium">.xlsx</span> file here
            </p>
            <p className="text-gray-400 text-sm">or click to browse</p>
          </label>
          {error && (
            <p className="mt-4 text-red-600 text-sm max-w-lg">{error}</p>
          )}
        </>
      ) : (
        <div className="w-full max-w-lg bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-800 mb-4">Preview</h2>
          <dl className="text-sm text-gray-600 space-y-2 mb-6">
            <div className="flex justify-between">
              <dt className="font-medium text-gray-500">Client</dt>
              <dd>{data.clientName}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium text-gray-500">Statement Date</dt>
              <dd>{data.statementDate}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-medium text-gray-500">Line Items</dt>
              <dd>{data.lineItems.length}</dd>
            </div>
            {data.propertyInfo.length > 0 && (
              <div className="flex justify-between">
                <dt className="font-medium text-gray-500">Property</dt>
                <dd className="text-right">{data.propertyInfo.join(", ")}</dd>
              </div>
            )}
          </dl>

          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              disabled={generating}
              className="flex-1 bg-emerald-600 text-white rounded-lg py-2.5 font-medium hover:bg-emerald-700 disabled:opacity-50 transition-colors cursor-pointer"
            >
              {generating ? "Generating..." : "Download PDF"}
            </button>
            <button
              onClick={handleReset}
              className="px-4 text-gray-500 hover:text-gray-700 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer"
            >
              Reset
            </button>
          </div>

          {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}
        </div>
      )}
    </div>
  );
}
