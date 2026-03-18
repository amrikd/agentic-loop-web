"use client";

import { useState } from "react";
import SubmitPage from "./submit/page";
import DashboardPage from "./dashboard/page";

type Tab = "submit" | "dashboard";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("submit");

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navigation */}
      <nav style={{
        display: "flex",
        gap: "0",
        borderBottom: "1px solid var(--surface)",
        background: "var(--surface)",
      }}>
        <TabButton
          label="Submit"
          active={activeTab === "submit"}
          onClick={() => setActiveTab("submit")}
        />
        <TabButton
          label="Dashboard"
          active={activeTab === "dashboard"}
          onClick={() => setActiveTab("dashboard")}
        />
      </nav>

      {/* Content */}
      <main style={{ flex: 1, padding: "32px", maxWidth: "800px", margin: "0 auto", width: "100%" }}>
        {activeTab === "submit" ? <SubmitPage /> : <DashboardPage />}
      </main>
    </div>
  );
}

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 24px",
        background: active ? "var(--bg)" : "transparent",
        color: active ? "var(--accent-light)" : "var(--text-secondary)",
        border: "none",
        borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: active ? 600 : 400,
        transition: "all 0.2s",
      }}
    >
      {label}
    </button>
  );
}
