/**
 * Wraps an async route handler so thrown errors are forwarded to Express error middleware.
 * @param {Function} fn - Async route handler (req, res, next) => Promise
 * @returns {Function}
 */
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
