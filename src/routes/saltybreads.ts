import { Router } from 'express'
import {
	deleteBread,
	resetBreads,
	getBread,
	getBreads,
	postBread,
	updateBread,
	reorderBreads,
} from '../controllers/saltyBreads'

const router = Router()

router.route('/').get(getBreads).post(postBread).put(resetBreads)
router.route('/:id').get(getBread).put(updateBread).delete(deleteBread)
router.patch('/reorder-list', reorderBreads)

export { router }
