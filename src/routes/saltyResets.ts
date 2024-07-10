import { Router } from 'express'
import {
	deleteReset,
	getReset,
	getResets,
	postReset,
	updateReset,
} from '../controllers/saltyResets'

const router = Router()

router.route('/').get(getResets).post(postReset)

router.route('/:id').get(getReset).put(updateReset).delete(deleteReset)

export { router }
