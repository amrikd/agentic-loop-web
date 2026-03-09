export default function DashboardPage() {
  // Build your dashboard here.
  // Use getResults(), getHistory(), getComments() from @/lib/api
  //
  // getResults()           => Promise<GetResultsResponse>   — aggregated mood data
  // getHistory(limit?)     => Promise<GetHistoryResponse>   — chronological entries
  // getComments(limit?)    => Promise<GetCommentsResponse>  — anonymous comments
  //
  // Suggested features:
  //  - Average mood score + total entry count
  //  - Mood distribution bar/pie chart
  //  - Recent entries timeline
  //  - Anonymous comment feed
  //  - Auto-refresh or manual refresh button
  return (
    <div className="flex flex-col items-center gap-6 py-12">
      <h1 className="text-3xl font-bold">Team Dashboard</h1>
      <p className="text-[var(--color-text-secondary)]">
        Build your dashboard here.
      </p>
      <code className="text-xs font-mono bg-[var(--color-surface)] border border-[var(--color-border)] px-4 py-2 rounded text-[var(--color-primary)]">
        Use getResults(), getHistory(), getComments() from @/lib/api
      </code>
    </div>
  );
}
