// ─── API Request/Response Types ─────────────────────────────────────────────

export interface SubmitMoodRequest {
  mood: number;       // 1-5
  comment?: string;   // max 280 chars
  team_id: string;    // "dev-01" through "dev-40"
}

export interface SubmitMoodResponse {
  id: number;
  created_at: string;
  mood: number;
  has_comment: boolean;
}

export interface ResultsResponse {
  team_id: string;
  total_submissions: number;
  average_mood: number;
  distribution: Record<string, number>; // { "1": N, "2": N, ... "5": N }
  last_updated: string | null;
}

export interface HistoryEntry {
  id: number;
  mood: number;
  created_at: string;
}

export interface HistoryResponse {
  entries: HistoryEntry[];
  total: number;
}

export interface MoodComment {
  id: number;
  comment: string;
  mood: number;
  created_at: string;
}

export interface CommentsResponse {
  comments: MoodComment[];
  total: number;
}

export interface HealthResponse {
  status: "ok" | "degraded";
  timestamp: string;
  error?: string;
}

export interface ApiError {
  error: string;
}
