import { randomUUID } from 'node:crypto';

/**
 * Attach a unique request ID to every incoming request.
 * Uses the client-provided X-Request-Id header or generates a new UUID.
 */
const requestIdMiddleware = (req, res, next) => {
    const id = req.headers['x-request-id'] || randomUUID();
    req.id = id;
    res.setHeader('X-Request-Id', id);
    next();
};

export default requestIdMiddleware;
