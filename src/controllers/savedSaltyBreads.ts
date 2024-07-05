import { Request, Response } from 'express'
import { tryCatchWrapper } from '../utils/tryCatchWrapper'
import service from '../services/savedSaltyBreads'

const getSavedBreadsArr = tryCatchWrapper(
	(req: Request, res: Response) => service.getBreads(),
	'GET_SAVED_BREADS_ERROR'
)

const getSavedBreads = tryCatchWrapper(
	(req: Request, res: Response) => service.getBread(req.params.id),
	'GET_SAVED_BREAD_ERROR'
)

const postSavedBreads = tryCatchWrapper(
	(req: Request, res: Response) => service.insertBread(req.body),
	'POST_SAVED_BREAD_ERROR'
)

const updateSavedBreads = tryCatchWrapper(
	(req: Request, res: Response) => service.updateBread(req.params.id, req.body),
	'UPDATE_SAVED_BREAD_ERROR'
)

const deleteSavedBreads = tryCatchWrapper(
	(req: Request, res: Response) => service.deleteBread(req.params.id),
	'DELETE_SAVED_BREAD_ERROR'
)

export {
	getSavedBreadsArr,
	getSavedBreads,
	postSavedBreads,
	updateSavedBreads,
	deleteSavedBreads,
}
