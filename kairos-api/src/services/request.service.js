import * as requestRepo from '../repositories/request.repo.js';

export async function submitRequest(data) {
    return requestRepo.createRequest(data);
}
