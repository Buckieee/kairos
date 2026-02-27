# Kairos API

Production-ready backend API for the Kairos landing page — lead capture, contact forms, and newsletter subscriptions.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env template and fill in your values
cp .env.example .env

# 3. Start development server
npm run dev

# 4. Verify
curl http://localhost:3000/api/v1/health
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NODE_ENV` | No | `development` / `production` (default: `development`) |
| `PORT` | No | Server port (default: `3000`) |
| `CORS_ORIGINS` | No | Comma-separated allowed origins |
| `RATE_LIMIT_WINDOW_MS` | No | Rate-limit window in ms (default: `900000`) |
| `RATE_LIMIT_MAX` | No | Max requests per window (default: `100`) |
| `SUPABASE_URL` | **Yes** | Supabase project URL |
| `SUPABASE_ANON_KEY` | No | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | **Yes** | Supabase service-role key |

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start with nodemon (hot-reload) |
| `npm start` | Production start |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests (vitest) |

## API Endpoints

All routes are mounted under `/api/v1`.

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/v1/health` | Health check |
| `POST` | `/api/v1/leads` | Submit a lead |
| `POST` | `/api/v1/contact` | Submit a contact form |
| `POST` | `/api/v1/newsletter/subscribe` | Subscribe to newsletter |

## Project Structure

```
kairos-api/
├── src/
│   ├── app.js              # Express app setup
│   ├── server.js            # Server entry point
│   ├── config/              # Configuration modules
│   ├── routes/              # Route definitions
│   ├── controllers/         # Request handlers
│   ├── services/            # Business logic
│   ├── repositories/        # Data-access layer (Supabase)
│   ├── middlewares/         # Express middlewares
│   ├── schemas/             # Zod validation schemas
│   └── utils/               # Shared utilities
└── tests/                   # Test files
```
