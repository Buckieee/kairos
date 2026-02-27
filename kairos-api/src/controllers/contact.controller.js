import * as contactService from '../services/contact.service.js';
import { sendSuccess } from '../utils/responses.js';
import asyncHandler from '../utils/asyncHandler.js';
import { HTTP_STATUS } from '../utils/constants.js';

/**
 * POST /api/v1/contact
 */
export const submitContact = asyncHandler(async (req, res) => {
    const contact = await contactService.submitContact(req.body);
    return sendSuccess(res, { status: HTTP_STATUS.CREATED, data: contact });
});
