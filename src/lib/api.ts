import type {
  SubmitMoodRequest,
  SubmitMoodResponse,
  GetResultsResponse,
  GetHistoryResponse,
  GetCommentsResponse,
  HealthCheckResponse,
  PulseAPIError,
} from "@/types/pulse";

// ── Config ────────────────────────────────────────────────────
const API_URL  = process.env.NEXT_PUBLIC_TEAM_PULSE_API_URL ?? "mock";
const TEAM_ID  = process.env.NEXT_PUBLIC_TEAM_ID ?? "dev-01";
const IS_MOCK  = API_URL === "mock";
const BASE_URL = IS_MOCK ? "" : API_URL.replace(/\/$/, "");

// ── Error class ───────────────────────────────────────────────
export class PulseError extends Error {
  constructor(
    public readonly code: string,
    message: string,
    public readonly status: number
  ) {
    super(message);
    this.name = "PulseError";
  }
}

// ── Internal fetch helper ─────────────────────────────────────
async function apiFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${BASE_URL}${path}`, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });
  } catch (err) {
    throw new PulseError(
      "NETWORK_ERROR",
      err instanceof Error ? err.message : "Network request failed",
      0
    );
  }
  if (!res.ok) {
    let errorBody: Partial<PulseAPIError> = {};
    try { errorBody = await res.json() as Partial<PulseAPIError>; } catch { /* ignore */ }
    throw new PulseError(
      errorBody.code ?? "API_ERROR",
      errorBody.message ?? `Request failed with status ${res.status}`,
      res.status
    );
  }
  return res.json() as Promise<T>;
}

// ── Mock data ─────────────────────────────────────────────────
// Switch NEXT_PUBLIC_TEAM_PULSE_API_URL to "mock" to use these.
// All mock functions are enabled when IS_MOCK is true.

const MOCK_SUBMIT: SubmitMoodResponse = {
  id: "mock-entry-001",
  team_id: TEAM_ID,
  mood: 4,
  comment: "Feeling good today",
  timestamp: new Date().toISOString(),
};

const MOCK_RESULTS: GetResultsResponse = {
  team_id: TEAM_ID,
  total_entries: 27,
  average_mood: 3.7,
  distribution: [
    { mood: 1, count: 1,  percentage: 3.7  },
    { mood: 2, count: 3,  percentage: 11.1 },
    { mood: 3, count: 7,  percentage: 25.9 },
    { mood: 4, count: 12, percentage: 44.4 },
    { mood: 5, count: 4,  percentage: 14.8 },
  ],
  last_updated: new Date().toISOString(),
};

const MOCK_HISTORY: GetHistoryResponse = {
  team_id: TEAM_ID,
  total: 27,
  limit: 10,
  entries: Array.from({ length: 10 }, (_, i) => ({
    id: `mock-entry-${String(i).padStart(3, "0")}`,
    team_id: TEAM_ID,
    mood: ([3, 4, 4, 5, 2, 4, 3, 5, 4, 3][i] ?? 3) as 1 | 2 | 3 | 4 | 5,
    comment: i % 2 === 0 ? `Mock comment ${i}` : undefined,
    timestamp: new Date(Date.now() - i * 3_600_000).toISOString(),
  })),
};

const MOCK_COMMENTS: GetCommentsResponse = {
  team_id: TEAM_ID,
  total: 16,
  limit: 10,
  comments: [
    { id: "c-001", mood: 5, comment: "Great sprint, really in the zone.",       timestamp: new Date(Date.now() - 1_800_000).toISOString()  },
    { id: "c-002", mood: 2, comment: "Too many interruptions today.",            timestamp: new Date(Date.now() - 3_600_000).toISOString()  },
    { id: "c-003", mood: 4, comment: "Good pair session this afternoon.",        timestamp: new Date(Date.now() - 7_200_000).toISOString()  },
    { id: "c-004", mood: 3, comment: "Blocked on infra, waiting on access.",     timestamp: new Date(Date.now() - 10_800_000).toISOString() },
    { id: "c-005", mood: 4, comment: "Shipped the feature, feels good.",         timestamp: new Date(Date.now() - 14_400_000).toISOString() },
  ],
};

const MOCK_HEALTH: HealthCheckResponse = {
  status: "ok",
  timestamp: new Date().toISOString(),
  version: "1.0.0-mock",
};

// ── Public API functions ──────────────────────────────────────

/**
 * Submit a mood entry for your team.
 * @param mood    - Integer 1–5 (1 = very low, 5 = excellent)
 * @param comment - Optional anonymous comment, max 280 chars
 */
export async function submitMood(
  mood: SubmitMoodRequest["mood"],
  comment?: string
): Promise<SubmitMoodResponse> {
  if (IS_MOCK) return { ...MOCK_SUBMIT, mood, comment, timestamp: new Date().toISOString() };
  const body: SubmitMoodRequest = { team_id: TEAM_ID, mood, ...(comment ? { comment } : {}) };
  return apiFetch<SubmitMoodResponse>("/api/v1/pulse", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

/**
 * Get aggregated mood results for your team.
 */
export async function getResults(): Promise<GetResultsResponse> {
  if (IS_MOCK) return { ...MOCK_RESULTS, last_updated: new Date().toISOString() };
  return apiFetch<GetResultsResponse>(`/api/v1/pulse/results?team_id=${TEAM_ID}`);
}

/**
 * Get chronological mood entries for your team.
 * @param limit - Max entries to return (default 20)
 */
export async function getHistory(limit = 20): Promise<GetHistoryResponse> {
  if (IS_MOCK) return MOCK_HISTORY;
  return apiFetch<GetHistoryResponse>(`/api/v1/pulse/history?team_id=${TEAM_ID}&limit=${limit}`);
}

/**
 * Get anonymous comments from your team's entries.
 * @param limit - Max comments to return (default 20)
 */
export async function getComments(limit = 20): Promise<GetCommentsResponse> {
  if (IS_MOCK) return MOCK_COMMENTS;
  return apiFetch<GetCommentsResponse>(`/api/v1/pulse/comments?team_id=${TEAM_ID}&limit=${limit}`);
}

/**
 * Check API health. Use to verify the backend is reachable.
 */
export async function healthCheck(): Promise<HealthCheckResponse> {
  if (IS_MOCK) return { ...MOCK_HEALTH, timestamp: new Date().toISOString() };
  return apiFetch<HealthCheckResponse>("/api/v1/pulse/health");
}
