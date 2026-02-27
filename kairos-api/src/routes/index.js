import { Router } from 'express';
import healthRoutes from './health.routes.js';
import leadsRoutes from './leads.routes.js';
import contactRoutes from './contact.routes.js';
import newsletterRoutes from './newsletter.routes.js';
import careerRoutes from './career.routes.js';
import requestRoutes from './request.routes.js';

const router = Router();

router.use('/health', healthRoutes);
router.use('/leads', leadsRoutes);
router.use('/contact', contactRoutes);
router.use('/newsletter', newsletterRoutes);
router.use('/careers', careerRoutes);
router.use('/requests', requestRoutes);

export default router;
