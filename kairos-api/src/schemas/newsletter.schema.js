import { z } from 'zod';

export const newsletterSchema = z
    .object({
        email: z.string().email().max(255),
        source: z.string().max(100).optional(),
    })
    .strict();
