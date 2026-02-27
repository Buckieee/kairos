import { z } from 'zod';

export const featureRequestSchema = z
    .object({
        description: z.string().min(1).max(2000),
        matched_pillar: z.string().max(255).optional(),
        email: z.string().email().max(255).optional(),
    })
    .strict();
