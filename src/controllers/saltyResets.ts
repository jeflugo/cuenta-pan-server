import { Request, Response } from 'express'
import service from '../services/saltyResets'
import { tryCatchWrapper } from '../utils/tryCatchWrapper'

const getResets = tryCatchWrapper(
	(req: Request, res: Response) => service.getResets(),
	'GET_RESETS_ERROR'
)

const getReset = tryCatchWrapper(
	(req: Request, res: Response) => service.getReset(req.params.id),
	'GET_RESET_ERROR'
)

const postReset = tryCatchWrapper(
	(req: Request, res: Response) => service.insertReset(req.body),
	'POST_RESET_ERROR'
)

const updateReset = tryCatchWrapper(
	(req: Request, res: Response) => service.updateReset(req.params.id, req.body),
	'UPDATE_RESET_ERROR'
)

const deleteReset = tryCatchWrapper(
	(req: Request, res: Response) => service.deleteReset(req.params.id),
	'DELETE_RESET_ERROR'
)

export { getResets, postReset, deleteReset, getReset, updateReset }
