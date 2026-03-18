import { config } from "./config";
import {
  SubmitMoodRequest,
  SubmitMoodResponse,
  ResultsResponse,
  HistoryResponse,
  CommentsResponse,
  HealthResponse,
  ApiError,
} from "./types";
import { mockData } from "./mock-data";

// ─── API Client ─────────────────────────────────────────────────────────────

class PulseApiError extends Error {
  constructor(public status: number, public apiError: ApiError) {
    super(apiError.error);
    this.name = "PulseApiError";
  }
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${config.apiBaseUrl}${path}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    const body: ApiError = await res.json().catch(() => ({ error: "Unknown error" }));
    throw new PulseApiError(res.status, body);
  }

  return res.json();
}

// ─── Public API ─────────────────────────────────────────────────────────────

/**
 * Submit a mood score (1–5) with an optional comment.
 * POST /pulse
 */
export async function submitMood(mood: number, comment?: string): Promise<SubmitMoodResponse> {
  if (config.useMock) return mockData.submitResponse;

  const body: SubmitMoodRequest = {
    team_id: config.teamId,
    mood,
    ...(comment ? { comment } : {}),
  };

  return request<SubmitMoodResponse>("/pulse", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

/**
 * Fetch aggregated mood results for the team.
 * GET /pulse/results?team_id=...
 */
export async function getResults(): Promise<ResultsResponse> {
  if (config.useMock) return mockData.resultsResponse;
  return request<ResultsResponse>(`/pulse/results?team_id=${config.teamId}`);
}

/**
 * Fetch mood history entries for the team.
 * GET /pulse/history?team_id=...&limit=...
 */
export async function getHistory(limit = 20): Promise<HistoryResponse> {
  if (config.useMock) return mockData.historyResponse;
  return request<HistoryResponse>(`/pulse/history?team_id=${config.teamId}&limit=${limit}`);
}

/**
 * Fetch anonymised comments for the team.
 * GET /pulse/comments?team_id=...&limit=...
 */
export async function getComments(limit = 20): Promise<CommentsResponse> {
  if (config.useMock) return mockData.commentsResponse;
  return request<CommentsResponse>(`/pulse/comments?team_id=${config.teamId}&limit=${limit}`);
}

/**
 * Ping the API to confirm it is reachable.
 * GET /health
 */
export async function healthCheck(): Promise<HealthResponse> {
  if (config.useMock) return mockData.healthResponse;
  return request<HealthResponse>("/health");
}

export { PulseApiError };
