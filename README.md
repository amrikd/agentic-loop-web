# Team Pulse

An anonymous team mood and feedback tool. Submit how you're feeling, see the team's pulse update live.

---

## What You're Building

Two screens, one API client, from scratch.

### Submit Screen
Submit your mood on a 1–5 scale with an optional anonymous comment.

- **5 mood buttons** — each with an emoji, color, and label (Awful → Great)
- **Comment field** — optional, max 280 characters, with live character count
- **Submit button** — disabled until a mood is selected, shows loading state
- **Success feedback** — clear confirmation that your mood was recorded
- **Error handling** — if the API fails, show the error with a retry option

### Dashboard Screen
See the team's mood at a glance. Updates with real data as people submit.

- **Average mood** — big number with emoji, colored by mood
- **Total submissions** — how many moods have been recorded
- **Mood distribution** — horizontal bar chart showing count per mood (1–5)
- **Recent comments** — anonymous comments with mood indicator and timestamp
- **Loading state** — skeleton placeholders while data loads
- **Empty state** — friendly message when no submissions exist yet
- **Refresh** — button to re-fetch latest data

### API Client
A typed HTTP client that connects your app to the live backend.

- **5 functions** — submitMood, getResults, getHistory, getComments, healthCheck
- **Error handling** — catch network errors, parse API error messages
- **Type safety** — all responses typed, no `any`

---

## API Contract

**Base URL:** `https://agentic-loop-api.vercel.app/api/v1`

### POST /pulse — Submit a mood

```json
// Request body
{ "mood": 4, "comment": "Great retro today", "team_id": "dev-01" }

// Response (201)
{ "id": 42, "created_at": "2026-03-20T14:30:00Z", "mood": 4, "has_comment": true }
```

### GET /pulse/results?team_id=dev-01 — Team stats

```json
{
  "team_id": "dev-01",
  "total_submissions": 28,
  "average_mood": 3.6,
  "distribution": { "1": 2, "2": 3, "3": 8, "4": 10, "5": 5 },
  "last_updated": "2026-03-20T14:30:00Z"
}
```

### GET /pulse/history?team_id=dev-01&limit=20 — Mood timeline

```json
{
  "entries": [
    { "id": 42, "mood": 4, "created_at": "2026-03-20T14:30:00Z" }
  ],
  "total": 28
}
```

### GET /pulse/comments?team_id=dev-01&limit=20 — Anonymous comments

```json
{
  "comments": [
    { "id": 42, "comment": "Great retro today", "mood": 4, "created_at": "2026-03-20T14:30:00Z" }
  ]
}
```

### GET /health — API health check

```json
{ "status": "ok", "timestamp": "2026-03-20T14:30:00Z" }
```

### Validation Rules
- `mood`: integer 1–5 only
- `comment`: max 280 characters, optional
- `team_id`: format `dev-XX` where XX is 01–40
- Rate limit: 60 POSTs per minute per team_id

---

## Design Guidelines

Dark theme. Mood-driven colors.

| Mood | Emoji | Color | Label |
|------|-------|-------|-------|
| 1 | 😡 | `#FF6B6B` Red | Awful |
| 2 | 😟 | `#FFA502` Orange | Bad |
| 3 | 😐 | `#FFD43B` Yellow | Okay |
| 4 | 😊 | `#51CF66` Green | Good |
| 5 | 🤩 | `#6C5CE7` Purple | Great |

**Background:** `#0D0D1A` · **Surface:** `#1A1A2E` · **Accent:** `#6C5CE7`

All tokens are in `lib/design-tokens.ts`. Use them — don't hardcode colors.

---

## Setup

### Prerequisites
- Node.js 18+
- VS Code with GitHub Copilot

### Run

```bash
git clone https://github.com/amrikd/agentic-loop-web.git
cd agentic-loop-web
npm install
npm run dev
```

Open http://localhost:3000

### Configure Your Team ID

Edit `lib/config.ts`:
```typescript
teamId: "dev-XX"  // ← Your assigned number
```

---

## What's Already Built

| File | What It Does |
|---|---|
| `lib/types.ts` | All TypeScript interfaces for API requests/responses |
| `lib/config.ts` | Base URL, team ID, mock toggle |
| `lib/design-tokens.ts` | Colors, mood colors, spacing, border radius |
| `lib/mock-data.ts` | Static mock data for offline development |
| `app/page.tsx` | Tab navigation (Submit + Dashboard) |
| `app/globals.css` | CSS variables, dark theme |

## What You Build

| File | What to Build |
|---|---|
| `lib/api.ts` | Typed fetch client — all 5 API functions |
| `app/submit/page.tsx` | Mood submission UI |
| `app/dashboard/page.tsx` | Dashboard with stats, chart, comments |
| `components/*.tsx` | Shared components (optional) |

---

## Stretch Features

Done early? Try these:
- Auto-refresh dashboard (poll every 30s)
- Mood trend chart from history data
- Time range filtering
- Keyboard shortcuts (1–5 to select mood)
- Animated transitions and micro-interactions
- Export dashboard as image

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| UI | React 18 + CSS variables |
| HTTP | fetch API |

## License

MIT
