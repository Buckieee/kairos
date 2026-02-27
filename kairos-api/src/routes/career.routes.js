import { Router } from 'express';
import * as careerController from '../controllers/career.controller.js';
import validate from '../middlewares/validate.middleware.js';
import { careerSchema } from '../schemas/career.schema.js';

const router = Router();

router.post('/', validate(careerSchema), careerController.submitApplication);

export default router;
