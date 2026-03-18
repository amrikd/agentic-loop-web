import type {
  SubmitMoodResponse,
  ResultsResponse,
  HistoryResponse,
  CommentsResponse,
  HealthResponse,
} from "./types";

/** Static mock data for offline development. Enable via config.useMock = true. */
export const mockData = {
  submitResponse: {
    id: 1,
    created_at: "2026-03-09T12:00:00Z",
    mood: 4,
    has_comment: true,
  } satisfies SubmitMoodResponse,

  resultsResponse: {
    team_id: "dev-01",
    total_submissions: 42,
    average_mood: 3.8,
    distribution: { "1": 2, "2": 5, "3": 10, "4": 15, "5": 10 },
    last_updated: "2026-03-09T12:00:00Z",
  } satisfies ResultsResponse,

  historyResponse: {
    entries: [
      { id: 1, mood: 4, created_at: "2026-03-09T09:00:00Z" },
      { id: 2, mood: 2, created_at: "2026-03-08T17:00:00Z" },
      { id: 3, mood: 5, created_at: "2026-03-07T14:30:00Z" },
    ],
    total: 3,
  } satisfies HistoryResponse,

  commentsResponse: {
    comments: [
      { id: 1, comment: "Great collaboration this week!", mood: 4, created_at: "2026-03-09T09:00:00Z" },
      { id: 2, comment: "Feeling overwhelmed with context switching.", mood: 2, created_at: "2026-03-08T17:00:00Z" },
    ],
    total: 2,
  } satisfies CommentsResponse,

  healthResponse: {
    status: "ok",
    timestamp: "2026-03-09T12:00:00Z",
  } satisfies HealthResponse,
};
