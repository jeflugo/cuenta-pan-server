import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
const port = process.env.PORT || 3000

app.use(morgan('tiny'))

app.use(cors())

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
