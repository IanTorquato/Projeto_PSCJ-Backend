import express from 'express'
import path from 'path'
import cors from 'cors'
import 'dotenv/config'

import routes from './routes'

const app = express()

const localUploads = process.env.PORT !== '3333'
	? express.static(path.resolve(__dirname, '..', '..', 'src', 'uploads'))
	: express.static(path.resolve(__dirname, 'uploads'))

app.use(express.json())
app.use(cors({ origin: process.env.PG_HOST === 'localhost' ? undefined : process.env.URL_BANCO }))
app.use(routes)
app.use('/uploads', localUploads)

app.listen(process.env.PORT, () => console.log(`--> Servidor rodando na porta ${process.env.PORT} <--`))