import rateLimit from 'express-rate-limit';
import config from '../config/env.js';

/**
 * Global rate limiter.
 */
const rateLimitMiddleware = rateLimit({
    windowMs: config.rateLimitWindowMs,
    max: config.rateLimitMax,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        error: {
            code: 'RATE_LIMITED',
            message: 'Too many requests, please try again later',
        },
    },
});

export default rateLimitMiddleware;
