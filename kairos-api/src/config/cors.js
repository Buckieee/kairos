import cors from 'cors';
import config from './env.js';

/**
 * CORS middleware configured from CORS_ORIGINS env var.
 */
const corsMiddleware = cors({
    origin(origin, callback) {
        // Allow requests with no origin (curl, mobile apps, server-to-server)
        if (!origin) return callback(null, true);

        if (config.corsOrigins.includes(origin)) {
            return callback(null, true);
        }

        return callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Id'],
    credentials: true,
    maxAge: 86400,
});

export default corsMiddleware;
