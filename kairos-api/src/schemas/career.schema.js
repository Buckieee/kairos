import { z } from 'zod';

export const careerSchema = z
    .object({
        name: z.string().min(1).max(255),
        email: z.string().email().max(255),
        role: z.string().max(255).optional(),
        portfolio: z.string().max(500).optional(),
        message: z.string().min(1).max(5000),
    })
    .strict();
