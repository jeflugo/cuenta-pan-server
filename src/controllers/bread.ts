import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'

const getBreads = async (req: Request, res: Response) => {
	try {
		res.json({ msg: 'get all breads.' })
	} catch (error) {
		handleHttp(res, 'GET_BREADS_ERROR')
	}
}

const getBread = async (req: Request, res: Response) => {
	try {
	} catch (error) {
		handleHttp(res, 'GET_BREAD_ERROR')
	}
}

const postBread = async (req: Request, res: Response) => {
	try {
		res.send(req.body)
	} catch (error) {
		handleHttp(res, 'POST_BREAD_ERROR')
	}
}

const updateBread = async (req: Request, res: Response) => {
	try {
	} catch (error) {
		handleHttp(res, 'UPDATE_BREAD_ERROR')
	}
}

const deleteBread = async (req: Request, res: Response) => {
	try {
	} catch (error) {
		handleHttp(res, 'DELETE_BREAD_ERROR')
	}
}

export { getBreads, postBread, deleteBread, getBread, updateBread }
