import { Router } from 'express'
import {
	deleteBread,
	getBread,
	getBreads,
	postBread,
	updateBread,
} from '../controllers/sweetBreads'

const router = Router()

router.route('/').get(getBreads).post(postBread)
router.route('/:id').get(getBread).put(updateBread).delete(deleteBread)

export { router }
