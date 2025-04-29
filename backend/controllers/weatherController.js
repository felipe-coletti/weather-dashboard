import Weather from '../models/Weather.js'

export async function receiveWeatherData(req, res) {
    try {
        const { temperature, humidity, windSpeed, pressure, location, condition } = req.body

        const weather = new Weather({
            temperature,
            humidity,
            windSpeed,
            pressure,
            location,
            condition
        })

        await weather.save()

        res.status(201).json({ message: 'Data saved successfully' })
    } catch (err) {
        res.status(500).json({ message: 'Error saving weather data' })
    }
}

export async function getWeatherData(req, res) {
    try {
        const data = await Weather.find().sort({ createdAt: -1 }).limit(1)
        res.status(200).json(data[0] || {})
    } catch (err) {
        res.status(500).json({ message: 'Error fetching weather data' })
    }
}
