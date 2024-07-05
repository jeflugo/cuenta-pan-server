import { Router } from 'express'
import {
	getSavedBreadsArr,
	getSavedBreads,
	postSavedBreads,
	updateSavedBreads,
	deleteSavedBreads,
} from '../controllers/savedSaltyBreads'

const router = Router()

router.route('/').get(getSavedBreadsArr).post(postSavedBreads)

router
	.route('/:id')
	.get(getSavedBreads)
	.put(updateSavedBreads)
	.delete(deleteSavedBreads)

export { router }
