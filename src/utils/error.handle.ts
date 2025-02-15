import { Response } from 'express'

const handleHttp = (res: Response, error: string, msg: string | null) => {
	if (msg) console.log(msg)
	res.status(500)
	res.send({ error })
}

export { handleHttp }
