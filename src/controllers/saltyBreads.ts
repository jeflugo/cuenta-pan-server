import { Request, Response } from 'express'
import service from '../services/saltyBreads'
import { tryCatchWrapper } from '../utils/tryCatchWrapper'

const getBreads = tryCatchWrapper(
	(req: Request, res: Response) => service.getBreads(),
	'GET_BREADS_ERROR'
)

const getBread = tryCatchWrapper(
	(req: Request, res: Response) => service.getBread(req.params.id),
	'GET_BREAD_ERROR'
)

const postBread = tryCatchWrapper(
	(req: Request, res: Response) => service.insertBread(req.body),
	'POST_BREAD_ERROR'
)

const updateBread = tryCatchWrapper(
	(req: Request, res: Response) => service.updateBread(req.params.id, req.body),
	'UPDATE_BREAD_ERROR'
)

const deleteBread = tryCatchWrapper(
	(req: Request, res: Response) => service.deleteBread(req.params.id),
	'DELETE_BREAD_ERROR'
)

export { getBreads, postBread, deleteBread, getBread, updateBread }
