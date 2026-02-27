import { Router } from 'express';
import * as requestController from '../controllers/request.controller.js';
import validate from '../middlewares/validate.middleware.js';
import { featureRequestSchema } from '../schemas/request.schema.js';

const router = Router();

router.post('/', validate(featureRequestSchema), requestController.submitRequest);

export default router;
