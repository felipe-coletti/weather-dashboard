import express from 'express'
import { receiveWeatherData, getWeatherData } from '../controllers/weatherController.js'

const router = express.Router()

router.post('/weather', receiveWeatherData)
router.get('/weather', getWeatherData)

export default router
