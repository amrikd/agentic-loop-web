import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team Pulse",
  description: "Anonymous team mood & feedback — The Agentic Loop",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const teamId = process.env.NEXT_PUBLIC_TEAM_ID ?? "dev-01";
  const isMock = (process.env.NEXT_PUBLIC_TEAM_PULSE_API_URL ?? "mock") === "mock";

  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        {isMock && (
          <div className="w-full bg-yellow-500/10 border-b border-yellow-500/30 text-yellow-400 text-xs text-center py-1 px-4">
            Mock mode — set NEXT_PUBLIC_TEAM_PULSE_API_URL to your API URL to go live
          </div>
        )}
        <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📡</span>
              <span className="font-semibold text-lg tracking-tight">Team Pulse</span>
            </div>
            <nav className="flex items-center gap-6 text-sm">
              <a href="/submit"    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Submit</a>
              <a href="/dashboard" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Dashboard</a>
              <span className="text-xs font-mono bg-[var(--color-subtle)] text-[var(--color-muted)] px-2 py-1 rounded">
                {teamId}
              </span>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
