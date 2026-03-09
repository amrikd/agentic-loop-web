export default function SubmitPage() {
  // Build your mood submission UI here.
  // Use submitMood() from @/lib/api
  //
  // submitMood(mood: 1 | 2 | 3 | 4 | 5, comment?: string) => Promise<SubmitMoodResponse>
  //
  // Suggested features:
  //  - Mood selector (1–5 with colour feedback)
  //  - Optional comment textarea (max 280 chars)
  //  - Submit button with loading + success states
  //  - Error handling for failed submissions
  return (
    <div className="flex flex-col items-center gap-6 py-12">
      <h1 className="text-3xl font-bold">How are you feeling?</h1>
      <p className="text-[var(--color-text-secondary)]">
        Build your mood submission UI here.
      </p>
      <code className="text-xs font-mono bg-[var(--color-surface)] border border-[var(--color-border)] px-4 py-2 rounded text-[var(--color-primary)]">
        Use submitMood() from @/lib/api
      </code>
    </div>
  );
}
