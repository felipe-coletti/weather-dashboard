import mongoose from 'mongoose'

const weatherRecordSchema = new mongoose.Schema({
    stationId: { type: String, required: true },
    location: { type: String },
    condition: { type: String },
    temperature: { type: Number, required: true },
    humidity: { type: Number, required: true },
    windSpeed: { type: Number, required: true },
    pressure: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
})

export default mongoose.model('WeatherRecord', weatherRecordSchema)
