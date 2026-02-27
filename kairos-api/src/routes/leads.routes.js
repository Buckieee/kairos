import { Router } from 'express';
import * as leadsController from '../controllers/leads.controller.js';
import validate from '../middlewares/validate.middleware.js';
import { leadSchema } from '../schemas/leads.schema.js';

const router = Router();

router.post('/', validate(leadSchema), leadsController.submitLead);

export default router;
