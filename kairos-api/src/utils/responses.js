/**
 * Consistent JSON response helpers.
 */

/**
 * Send a success response.
 * @param {import('express').Response} res
 * @param {object} options
 * @param {number}  [options.status=200]
 * @param {*}       [options.data=null]
 * @param {object}  [options.meta=null]
 */
export function sendSuccess(res, { status = 200, data = null, meta = null } = {}) {
    const body = { success: true, data };
    if (meta) body.meta = meta;
    return res.status(status).json(body);
}

/**
 * Send an error response.
 * @param {import('express').Response} res
 * @param {import('./AppError.js').default | Error} err
 */
export function sendError(res, err) {
    const statusCode = err.statusCode || 500;
    const body = {
        success: false,
        error: {
            code: err.code || 'INTERNAL_ERROR',
            message: err.message || 'Something went wrong',
        },
    };

    if (err.details) {
        body.error.details = err.details;
    }

    return res.status(statusCode).json(body);
}
