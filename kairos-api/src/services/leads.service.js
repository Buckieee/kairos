import * as leadsRepo from '../repositories/leads.repo.js';

/**
 * Leads service – business logic placeholder.
 */
export async function submitLead(data) {
    // TODO: add business logic (deduplication, enrichment, etc.)
    return leadsRepo.createLead(data);
}
