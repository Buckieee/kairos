import * as newsletterRepo from '../repositories/newsletter.repo.js';

/**
 * Newsletter service – business logic placeholder.
 */
export async function subscribe(data) {
    // TODO: add business logic (duplicate check, welcome email, etc.)
    return newsletterRepo.createSubscriber(data);
}
