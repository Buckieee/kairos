import { describe, it, expect } from 'vitest';
import { leadSchema } from '../src/schemas/leads.schema.js';
import { contactSchema } from '../src/schemas/contact.schema.js';
import { newsletterSchema } from '../src/schemas/newsletter.schema.js';

// ── Lead Schema ───────────────────────────────────────
describe('leadSchema', () => {
    it('accepts a valid lead', () => {
        const result = leadSchema.safeParse({
            email: 'alice@example.com',
            interestType: 'demo',
        });
        expect(result.success).toBe(true);
    });

    it('accepts a full lead payload', () => {
        const result = leadSchema.safeParse({
            name: 'Alice',
            email: 'alice@example.com',
            company: 'Acme',
            role: 'CTO',
            interestType: 'enterprise',
            message: 'Interested in a demo',
            source: 'landing-page',
        });
        expect(result.success).toBe(true);
    });

    it('rejects a lead without email', () => {
        const result = leadSchema.safeParse({ interestType: 'demo' });
        expect(result.success).toBe(false);
    });

    it('rejects a lead with invalid interestType', () => {
        const result = leadSchema.safeParse({
            email: 'a@b.com',
            interestType: 'invalid',
        });
        expect(result.success).toBe(false);
    });

    it('rejects unknown keys', () => {
        const result = leadSchema.safeParse({
            email: 'a@b.com',
            interestType: 'demo',
            rogue: 'field',
        });
        expect(result.success).toBe(false);
    });
});

// ── Contact Schema ────────────────────────────────────
describe('contactSchema', () => {
    it('accepts a valid contact', () => {
        const result = contactSchema.safeParse({
            name: 'Bob',
            email: 'bob@example.com',
            message: 'Hello!',
        });
        expect(result.success).toBe(true);
    });

    it('rejects contact without name', () => {
        const result = contactSchema.safeParse({
            email: 'bob@example.com',
            message: 'Hello!',
        });
        expect(result.success).toBe(false);
    });

    it('rejects contact without message', () => {
        const result = contactSchema.safeParse({
            name: 'Bob',
            email: 'bob@example.com',
        });
        expect(result.success).toBe(false);
    });

    it('rejects unknown keys', () => {
        const result = contactSchema.safeParse({
            name: 'Bob',
            email: 'bob@example.com',
            message: 'Hi',
            extra: true,
        });
        expect(result.success).toBe(false);
    });
});

// ── Newsletter Schema ─────────────────────────────────
describe('newsletterSchema', () => {
    it('accepts a valid subscription', () => {
        const result = newsletterSchema.safeParse({
            email: 'carol@example.com',
        });
        expect(result.success).toBe(true);
    });

    it('accepts subscription with source', () => {
        const result = newsletterSchema.safeParse({
            email: 'carol@example.com',
            source: 'footer-form',
        });
        expect(result.success).toBe(true);
    });

    it('rejects invalid email', () => {
        const result = newsletterSchema.safeParse({
            email: 'not-an-email',
        });
        expect(result.success).toBe(false);
    });

    it('rejects unknown keys', () => {
        const result = newsletterSchema.safeParse({
            email: 'carol@example.com',
            unknown: 'x',
        });
        expect(result.success).toBe(false);
    });
});
