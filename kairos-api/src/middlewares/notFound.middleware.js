import AppError from '../utils/AppError.js';

/**
 * Catch-all for unmatched routes.
 */
const notFoundMiddleware = (_req, _res, next) => {
    next(new AppError('Route not found', 404, 'NOT_FOUND'));
};

export default notFoundMiddleware;
