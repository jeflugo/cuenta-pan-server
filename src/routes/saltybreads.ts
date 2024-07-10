import { Router } from 'express'
import {
	deleteBread,
	resetBreads,
	getBread,
	getBreads,
	postBread,
	updateBread,
} from '../controllers/saltyBreads'

const router = Router()

router.route('/').get(getBreads).post(postBread).put(resetBreads)
router.route('/:id').get(getBread).put(updateBread).delete(deleteBread)

export { router }
