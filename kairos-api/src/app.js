import express from 'express';
import helmet from 'helmet';
import pinoHttp from 'pino-http';

import config from './config/env.js';
import logger from './config/logger.js';
import corsMiddleware from './config/cors.js';
import requestIdMiddleware from './middlewares/requestId.middleware.js';
import rateLimitMiddleware from './middlewares/rateLimit.middleware.js';
import notFoundMiddleware from './middlewares/notFound.middleware.js';
import errorMiddleware from './middlewares/error.middleware.js';
import routes from './routes/index.js';
import { API_PREFIX } from './utils/constants.js';

const app = express();

// ── Security ──────────────────────────────────────────
app.use(helmet());

// ── Request ID ────────────────────────────────────────
app.use(requestIdMiddleware);

// ── Request logging ───────────────────────────────────
app.use(
    pinoHttp({
        logger,
        genReqId: (req) => req.id,
        quietReqLogger: config.nodeEnv === 'production',
    }),
);

// ── Body parsing ──────────────────────────────────────
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false }));

// ── CORS ──────────────────────────────────────────────
app.use(corsMiddleware);

// ── Rate limiting ─────────────────────────────────────
app.use(rateLimitMiddleware);

// ── API routes ────────────────────────────────────────
app.use(API_PREFIX, routes);

// ── 404 catch-all ─────────────────────────────────────
app.use(notFoundMiddleware);

// ── Central error handler ─────────────────────────────
app.use(errorMiddleware);

export default app;
