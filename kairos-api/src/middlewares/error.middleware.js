import { sendError } from '../utils/responses.js';
import logger from '../config/logger.js';

/**
 * Central error-handling middleware.
 * Must have 4 params so Express recognises it as an error handler.
 */
// eslint-disable-next-line no-unused-vars
const errorMiddleware = (err, _req, res, _next) => {
    // Log the error
    logger.error({ err, statusCode: err.statusCode }, err.message);

    // Zod validation errors
    if (err.name === 'ZodError') {
        return sendError(res, {
            statusCode: 400,
            code: 'VALIDATION_ERROR',
            message: 'Validation failed',
            details: err.errors,
        });
    }

    // Operational errors thrown via AppError
    if (err.isOperational) {
        return sendError(res, err);
    }

    // Unknown / programmer errors
    return sendError(res, {
        statusCode: 500,
        code: 'INTERNAL_ERROR',
        message:
            process.env.NODE_ENV === 'production'
                ? 'An unexpected error occurred'
                : err.message,
    });
};

export default errorMiddleware;
