import { Router } from 'express';
import * as newsletterController from '../controllers/newsletter.controller.js';
import validate from '../middlewares/validate.middleware.js';
import { newsletterSchema } from '../schemas/newsletter.schema.js';

const router = Router();

router.post('/subscribe', validate(newsletterSchema), newsletterController.subscribe);

export default router;
