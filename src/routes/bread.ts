import { Router } from 'express'
import {
	deleteBread,
	getBread,
	getBreads,
	postBread,
	updateBread,
} from '../controllers/bread'

const router = Router()

router.route('/').get(getBreads).post(postBread)
router.route('/:id').get(getBread).put(updateBread).delete(deleteBread)

export default router
