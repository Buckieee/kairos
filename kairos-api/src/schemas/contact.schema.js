import { z } from 'zod';

export const contactSchema = z
    .object({
        name: z.string().min(1).max(255),
        email: z.string().email().max(255),
        subject: z.string().max(255).optional(),
        message: z.string().min(1).max(5000),
        phone: z.string().max(50).optional(),
        timeline: z.string().max(100).optional(),
        source: z.string().max(100).optional(),
    })
    .strict();
