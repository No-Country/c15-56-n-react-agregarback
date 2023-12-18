import { Router } from 'express';
import * as employmentsCtrl from '../controllers/employments.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
const router = Router();
router.post('/employments', authRequired, employmentsCtrl.createEmployment);
router.get('/employments',  employmentsCtrl.getEmployments);
router.get('/:employmentId', authRequired, employmentsCtrl.getEmploymentByID);
router.put('/:employmentId', authRequired,  employmentsCtrl.updateEmploymentByID);
router.delete('/:employmentId', authRequired,  employmentsCtrl.deleteEmploymentByID);

export default router;