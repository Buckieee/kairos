import { z } from 'zod';
import { INTEREST_TYPES } from '../utils/constants.js';

export const leadSchema = z
    .object({
        name: z.string().max(255).optional(),
        email: z.string().email().max(255),
        company: z.string().max(255).optional(),
        role: z.string().max(255).optional(),
        interestType: z.enum(INTEREST_TYPES),
        message: z.string().max(2000).optional(),
        source: z.string().max(100).optional(),
    })
    .strict();
