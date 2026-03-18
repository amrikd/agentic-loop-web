"use client";

// Build your dashboard UI here.
// Use getResults(), getHistory(), getComments() from @/lib/api
//
// What to build:
//  - Average mood display
//  - Distribution bar chart
//  - Recent comments feed
//  - Loading and empty states
//  - Refresh mechanism

export default function DashboardPage() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      minHeight: "60vh",
    }}>
      <span style={{ fontSize: "48px" }}>📊</span>
      <h1 style={{ fontSize: "24px", fontWeight: 600 }}>Team Dashboard</h1>
      <p style={{ color: "var(--text-secondary)", textAlign: "center", maxWidth: "400px" }}>
        Build your dashboard UI here.
        <br />
        Use <code>getResults()</code>, <code>getHistory()</code>,
        <code>getComments()</code> from <code>@/lib/api</code>
      </p>
    </div>
  );
}
