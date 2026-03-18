/** App-wide configuration. Change TEAM_ID to your assigned team. */
export const config = {
  /** Base URL for the Pulse API. No trailing slash. */
  apiBaseUrl: "https://agentic-loop-api.vercel.app/api/v1",

  /** Team identifier sent with every request. Format: dev-01 through dev-40. */
  teamId: "dev-01",

  /** Set to true to return static mock data instead of hitting the network. */
  useMock: false,
} as const;
