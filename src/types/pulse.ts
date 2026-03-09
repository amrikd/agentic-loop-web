export type MoodScore = 1 | 2 | 3 | 4 | 5;

// ── Request shapes ────────────────────────────────────────────
export interface SubmitMoodRequest {
  team_id: string;
  mood: MoodScore;
  comment?: string;        // optional, max 280 chars
  timestamp?: string;      // ISO 8601 — server uses server time if omitted
}

// ── Response shapes ───────────────────────────────────────────
export interface SubmitMoodResponse {
  id: string;
  team_id: string;
  mood: MoodScore;
  comment?: string;
  timestamp: string;
}

export interface MoodDistribution {
  mood: MoodScore;
  count: number;
  percentage: number;
}

export interface GetResultsResponse {
  team_id: string;
  total_entries: number;
  average_mood: number;
  distribution: MoodDistribution[];
  last_updated: string;
}

export interface MoodEntry {
  id: string;
  team_id: string;
  mood: MoodScore;
  comment?: string;
  timestamp: string;
}

export interface GetHistoryResponse {
  team_id: string;
  entries: MoodEntry[];
  total: number;
  limit: number;
}

export interface CommentEntry {
  id: string;
  mood: MoodScore;
  comment: string;
  timestamp: string;
}

export interface GetCommentsResponse {
  team_id: string;
  comments: CommentEntry[];
  total: number;
  limit: number;
}

export interface HealthCheckResponse {
  status: "ok" | "degraded" | "down";
  timestamp: string;
  version: string;
}

// ── API error ─────────────────────────────────────────────────
export interface PulseAPIError {
  code: string;
  message: string;
  status: number;
}
