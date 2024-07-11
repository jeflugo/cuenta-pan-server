import { Router } from 'express'
import {
	deleteBread,
	getBread,
	getBreads,
	postBread,
	resetBreads,
	updateBread,
	reorderBreads,
} from '../controllers/sweetBreads'

const router = Router()

router.route('/').get(getBreads).post(postBread).put(resetBreads)
router.route('/:id').get(getBread).put(updateBread).delete(deleteBread)
router.patch('/reorder-list', reorderBreads)

export { router }
