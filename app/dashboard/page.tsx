"use client";

// Build your dashboard UI here.
// What to build:
//  - API client (fetch wrapper for the Pulse API)
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
        Build your API client and dashboard UI here.
      </p>
    </div>
  );
}
