# Team Pulse — Web Starter

Anonymous mood & feedback tool built at **The Agentic Loop** (March 20).

---

## Setup

```bash
git clone git@github.com:amrik/agentic-loop-web.git
cd agentic-loop-web
npm install
cp .env.example .env.local
# Edit .env.local — set your team ID and API URL (see below)
npm run dev
```

Open http://localhost:3000

---

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_TEAM_PULSE_API_URL` | API base URL. Set to `mock` for local dev | `mock` |
| `NEXT_PUBLIC_TEAM_ID` | Your assigned team ID (e.g. `dev-07`) | `dev-01` |

> **To go live:** Replace `mock` with the hosted API URL once it's available.

---

## What You Build

Everything inside `/submit` and `/dashboard` is **yours to build**.

The scaffold gives you:
- A working Next.js app shell with dark theme
- A fully typed API client ready to call all 5 endpoints
- TypeScript interfaces for all request/response shapes
- Design tokens as CSS custom properties and Tailwind classes
- Mock data so you can build UI without the real API

---

## API Contract

Base URL: `NEXT_PUBLIC_TEAM_PULSE_API_URL`

### POST `/api/v1/pulse` — Submit mood

**Request:**
```json
{ "team_id": "dev-01", "mood": 4, "comment": "Great session" }
```

**Response:**
```json
{ "id": "abc123", "team_id": "dev-01", "mood": 4, "comment": "Great session", "timestamp": "2025-03-20T10:00:00Z" }
```

### GET `/api/v1/pulse/results?team_id=dev-01` — Aggregated results

```json
{
  "team_id": "dev-01",
  "total_entries": 27,
  "average_mood": 3.7,
  "distribution": [
    { "mood": 1, "count": 1, "percentage": 3.7 },
    { "mood": 5, "count": 4, "percentage": 14.8 }
  ],
  "last_updated": "2025-03-20T10:00:00Z"
}
```

### GET `/api/v1/pulse/history?team_id=dev-01&limit=20` — Entry history

```json
{
  "team_id": "dev-01",
  "total": 27,
  "limit": 20,
  "entries": [{ "id": "abc", "team_id": "dev-01", "mood": 4, "comment": "...", "timestamp": "..." }]
}
```

### GET `/api/v1/pulse/comments?team_id=dev-01&limit=20` — Anonymous comments

```json
{
  "team_id": "dev-01",
  "total": 16,
  "limit": 20,
  "comments": [{ "id": "c01", "mood": 5, "comment": "Shipped it!", "timestamp": "..." }]
}
```

### GET `/api/v1/pulse/health` — Health check

```json
{ "status": "ok", "timestamp": "2025-03-20T10:00:00Z", "version": "1.0.0" }
```

---

## Design Tokens

| Token | Value |
|---|---|
| `--color-mood-1` | `#ef4444` red |
| `--color-mood-2` | `#f97316` orange |
| `--color-mood-3` | `#eab308` yellow |
| `--color-mood-4` | `#22c55e` green |
| `--color-mood-5` | `#6366f1` indigo |
| `--color-bg` | `#0f1117` |
| `--color-surface` | `#1a1d27` |
| `--color-primary` | `#6366f1` |
| `--color-text` | `#f9fafb` |

All tokens available as CSS custom properties (`var(--color-mood-1)`) and as Tailwind classes (`bg-mood-1`, `text-brand-primary`, etc).

---

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx         # Shell: header, nav, mock banner
│   ├── page.tsx           # Landing page
│   ├── globals.css        # Tailwind + token imports
│   ├── submit/
│   │   └── page.tsx       # ← BUILD HERE
│   └── dashboard/
│       └── page.tsx       # ← BUILD HERE
├── lib/
│   └── api.ts             # API client — do not modify
├── types/
│   └── pulse.ts           # TypeScript interfaces
└── styles/
    └── tokens.css         # CSS custom properties
```

---

## TypeScript

Strict mode is enabled. Run `npm run type-check` to verify before committing.
