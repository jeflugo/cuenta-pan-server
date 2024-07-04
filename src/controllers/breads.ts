import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import service from '../services/breads'

const getBreads = async (req: Request, res: Response) => {
	try {
		res.json(await service.getBreads())
	} catch (error) {
		const msg = error instanceof Error ? error.message : null
		handleHttp(res, 'GET_BREADS_ERROR', msg)
	}
}

const getBread = async (req: Request, res: Response) => {
	try {
		res.json(await service.getBread(req.params.id))
	} catch (error) {
		const msg = error instanceof Error ? error.message : null
		handleHttp(res, 'GET_BREAD_ERROR', msg)
	}
}

const postBread = async (req: Request, res: Response) => {
	try {
		res.json(await service.insertBread(req.body))
	} catch (error) {
		const msg = error instanceof Error ? error.message : null
		handleHttp(res, 'POST_BREAD_ERROR', msg)
	}
}

const updateBread = async (req: Request, res: Response) => {
	try {
		res.json(await service.updateBread(req.params.id, req.body))
	} catch (error) {
		const msg = error instanceof Error ? error.message : null
		handleHttp(res, 'UPDATE_BREAD_ERROR', msg)
	}
}

const deleteBread = async (req: Request, res: Response) => {
	try {
		res.json(await service.deleteBread(req.params.id))
	} catch (error) {
		const msg = error instanceof Error ? error.message : null
		handleHttp(res, 'DELETE_BREAD_ERROR', msg)
	}
}

export { getBreads, postBread, deleteBread, getBread, updateBread }
