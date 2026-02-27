import * as leadsService from '../services/leads.service.js';
import { sendSuccess } from '../utils/responses.js';
import asyncHandler from '../utils/asyncHandler.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * POST /api/v1/leads
 */
export const submitLead = asyncHandler(async (req, res) => {
    const lead = await leadsService.submitLead(req.body);
    return sendSuccess(res, { status: HTTP_STATUS.CREATED, data: lead });
});
