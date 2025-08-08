import express, { json } from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import mongoose from 'mongoose'
import weatherRoutes from './routes/weatherRoutes.js'

config()

const app = express()
app.use(json())
app.use(cors())

app.use('/api', weatherRoutes)

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '0.0.0.0'
const MONGO_URI = process.env.MONGO_URI

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('Conectado ao MongoDB')
        app.listen(PORT, HOST, () => {
            console.log(`Servidor rodando em http://${HOST}:${PORT}`)
        })
    })
    .catch((err) => {
        console.error('Erro ao conectar ao MongoDB:', err)
    })
