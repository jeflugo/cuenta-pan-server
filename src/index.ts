import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import breadRouter from './routes/bread'
import db from './config/mongo'

db().then(() => {
	console.log('Connected to db')
})

const app = express()
const port = process.env.PORT || 3000

app.use(morgan('tiny'))

app.use(cors())

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/breads', breadRouter)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
	console.log(`Running on port: ${port}`)
})
