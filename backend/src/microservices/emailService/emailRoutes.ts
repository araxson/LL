import { Router } from 'express';
import { sendEmail } from './emailController';

const router = Router();

router.post('/email', sendEmail);

export default router;
