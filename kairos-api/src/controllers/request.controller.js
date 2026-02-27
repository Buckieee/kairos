import * as requestService from '../services/request.service.js';
import { sendSuccess } from '../utils/responses.js';
import asyncHandler from '../utils/asyncHandler.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * POST /api/v1/requests
 */
export const submitRequest = asyncHandler(async (req, res) => {
    const request = await requestService.submitRequest(req.body);
    return sendSuccess(res, { status: HTTP_STATUS.CREATED, data: request });
});
