/**
 * Application-wide constants.
 */

export const API_PREFIX = '/api/v1';

export const HTTP_STATUS = Object.freeze({
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    UNPROCESSABLE: 422,
    TOO_MANY_REQUESTS: 429,
    INTERNAL: 500,
});

export const ERROR_CODES = Object.freeze({
    VALIDATION_ERROR: 'VALIDATION_ERROR',
    NOT_FOUND: 'NOT_FOUND',
    RATE_LIMITED: 'RATE_LIMITED',
    INTERNAL_ERROR: 'INTERNAL_ERROR',
});

export const INTEREST_TYPES = Object.freeze([
    'demo',
    'pricing',
    'partnership',
    'general',
    'enterprise',
    'other',
]);
