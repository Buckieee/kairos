import * as careerService from '../services/career.service.js';
import { sendSuccess } from '../utils/responses.js';
import asyncHandler from '../utils/asyncHandler.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * POST /api/v1/careers
 */
export const submitApplication = asyncHandler(async (req, res) => {
    const application = await careerService.submitApplication(req.body);
    return sendSuccess(res, { status: HTTP_STATUS.CREATED, data: application });
});
