import AppError from '../utils/AppError.js';

/**
 * Factory that returns validation middleware for a given Zod schema.
 * Validates req.body and strips unknown keys.
 *
 * @param {import('zod').ZodSchema} schema
 * @returns {import('express').RequestHandler}
 */
const validate = (schema) => (req, _res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
        const details = result.error.errors.map((e) => ({
            path: e.path.join('.'),
            message: e.message,
        }));

        return next(
            new AppError('Validation failed', 400, 'VALIDATION_ERROR', details),
        );
    }

    // Replace body with parsed (and stripped) data
    req.body = result.data;
    next();
};

export default validate;
