import Link from "next/link";

export default function Home() {
  const teamId = process.env.NEXT_PUBLIC_TEAM_ID ?? "dev-01";

  return (
    <div className="flex flex-col items-center text-center gap-8 py-16">
      <div className="flex flex-col items-center gap-4">
        <span className="text-6xl">📡</span>
        <h1 className="text-4xl font-bold tracking-tight">Team Pulse</h1>
        <p className="text-[var(--color-text-secondary)] text-lg max-w-md">
          Anonymous mood &amp; feedback for your team — built at The Agentic Loop.
        </p>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span className="text-[var(--color-muted)]">Your team ID:</span>
        <code className="font-mono bg-[var(--color-surface)] border border-[var(--color-border)] px-3 py-1 rounded text-[var(--color-primary)]">
          {teamId}
        </code>
      </div>

      <div className="flex gap-4 mt-4">
        <Link
          href="/submit"
          className="px-6 py-3 rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium transition-colors"
        >
          Submit Mood →
        </Link>
        <Link
          href="/dashboard"
          className="px-6 py-3 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)] text-[var(--color-text)] font-medium transition-colors"
        >
          View Dashboard →
        </Link>
      </div>

      <div className="grid grid-cols-5 gap-3 mt-8">
        {[
          { score: 1, color: "var(--color-mood-1)", label: "Very Low"  },
          { score: 2, color: "var(--color-mood-2)", label: "Low"       },
          { score: 3, color: "var(--color-mood-3)", label: "Neutral"   },
          { score: 4, color: "var(--color-mood-4)", label: "Good"      },
          { score: 5, color: "var(--color-mood-5)", label: "Excellent" },
        ].map(({ score, color, label }) => (
          <div key={score} className="flex flex-col items-center gap-1">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: color }}
            >
              {score}
            </div>
            <span className="text-xs text-[var(--color-muted)]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
