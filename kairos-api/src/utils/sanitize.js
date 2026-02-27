/**
 * Basic input sanitization utilities.
 */

/**
 * Trim all string values in an object (shallow).
 * @param {object} obj
 * @returns {object}
 */
export function trimStrings(obj) {
    if (!obj || typeof obj !== 'object') return obj;

    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        result[key] = typeof value === 'string' ? value.trim() : value;
    }
    return result;
}

/**
 * Strip HTML tags from a string.
 * @param {string} str
 * @returns {string}
 */
export function stripHtml(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/<[^>]*>/g, '');
}
