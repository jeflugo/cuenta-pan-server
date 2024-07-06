import { Router } from 'express'
import {
	deleteBread,
	getBread,
	getBreads,
	postBread,
	resetBreads,
	updateBread,
} from '../controllers/sweetBreads'

const router = Router()

router.route('/').get(getBreads).post(postBread).put(resetBreads)
router.route('/:id').get(getBread).put(updateBread).delete(deleteBread)
// router.route('/reset').get(resetBreads)

export { router }
