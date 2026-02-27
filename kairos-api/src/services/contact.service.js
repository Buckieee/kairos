import * as contactRepo from '../repositories/contact.repo.js';

/**
 * Contact service – business logic placeholder.
 */
export async function submitContact(data) {
    // TODO: add business logic (notifications, spam check, etc.)
    return contactRepo.createContact(data);
}
