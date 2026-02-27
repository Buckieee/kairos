import * as healthRepo from '../repositories/health.repo.js';

/**
 * Health service – delegates to repository.
 */
export function getHealthStatus() {
    return healthRepo.checkDatabase();
}
