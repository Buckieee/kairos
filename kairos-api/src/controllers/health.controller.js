import * as healthService from '../services/health.service.js';
import { sendSuccess } from '../utils/responses.js';

/**
 * GET /api/v1/health
 */
export function getHealth(_req, res) {
    const result = healthService.getHealthStatus();
    return sendSuccess(res, { data: result });
}
