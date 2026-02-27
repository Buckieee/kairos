/**
 * Custom application error with HTTP status code and machine-readable code.
 */
export default class AppError extends Error {
    /**
     * @param {string}  message    - Human-readable error message
     * @param {number}  statusCode - HTTP status code (default 500)
     * @param {string}  code       - Machine-readable error code (e.g. 'VALIDATION_ERROR')
     * @param {*}       details    - Optional additional details
     */
    constructor(message, statusCode = 500, code = 'INTERNAL_ERROR', details = null) {
        super(message);
        this.name = 'AppError';
        this.statusCode = statusCode;
        this.code = code;
        this.details = details;
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}
