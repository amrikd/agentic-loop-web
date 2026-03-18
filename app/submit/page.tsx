"use client";

// Build your mood submission UI here.
// What to build:
//  - API client (fetch wrapper for the Pulse API)
//  - Mood selector (5 buttons, 1=bad to 5=great)
//  - Optional comment textarea (max 280 chars)
//  - Submit button with loading state
//  - Success/error feedback

export default function SubmitPage() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      minHeight: "60vh",
    }}>
      <span style={{ fontSize: "48px" }}>❤️</span>
      <h1 style={{ fontSize: "24px", fontWeight: 600 }}>Submit Your Mood</h1>
      <p style={{ color: "var(--text-secondary)", textAlign: "center", maxWidth: "400px" }}>
        Build your mood submission UI here.
        <br />
        Build your API client and submit mood UI here.
      </p>
    </div>
  );
}
