import {Router} from 'express'
const router = Router()
import * as employmentsCtrl from '../controllers/employments.controller.js'
router.post('/', employmentsCtrl.createEmployment)
router.get('/', employmentsCtrl.getEmployments)
router.get('/:employmentId', employmentsCtrl.getEmploymentByID)
router.put('/:employmentId', employmentsCtrl.updateEmploymentByID)
router.delete('/:employmentId', employmentsCtrl.deleteEmploymentByID)
export default router;