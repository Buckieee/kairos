import * as newsletterService from '../services/newsletter.service.js';
import { sendSuccess } from '../utils/responses.js';
import asyncHandler from '../utils/asyncHandler.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * POST /api/v1/newsletter/subscribe
 */
export const subscribe = asyncHandler(async (req, res) => {
    const subscriber = await newsletterService.subscribe(req.body);
    return sendSuccess(res, { status: HTTP_STATUS.CREATED, data: subscriber });
});
