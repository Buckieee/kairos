import * as careerRepo from '../repositories/career.repo.js';

/**
 * Career service – business logic.
 */
export async function submitApplication(data) {
    return careerRepo.createApplication(data);
}
