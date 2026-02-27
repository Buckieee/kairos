import { Router } from 'express';
import * as contactController from '../controllers/contact.controller.js';
import validate from '../middlewares/validate.middleware.js';
import { contactSchema } from '../schemas/contact.schema.js';

const router = Router();

router.post('/', validate(contactSchema), contactController.submitContact);

export default router;
