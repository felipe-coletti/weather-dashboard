async function fetchWeatherData() {
    try {
        const configResponse = await fetch('config.json')
        if (!configResponse.ok) {
            throw new Error('Erro ao carregar configuração')
        }

        const config = await configResponse.json()

        const response = await fetch(config.API_URL)
        if (!response.ok) {
            throw new Error('Erro ao buscar dados da estação')
        }

        const data = await response.json()
        if (!data) {
            throw new Error('Nenhum dado encontrado')
        }

        document.getElementById('location').textContent = data.location || 'Local Station'
        document.getElementById('temperature').textContent = `${data.temp} °C`
        document.getElementById('humidity').textContent = `${data.humidity}%`
        document.getElementById('wind-speed').textContent = `${data.windSpeed} Km/h`
        document.getElementById('pressure').textContent = `${data.pressure} hPa`

        const icon = document.querySelector('.weather-icon')
        icon.src = getWeatherIcon(data.condition)
        icon.alt = data.condition
    } catch (error) {
        console.error('Erro ao buscar dados da estação:', error)
        document.getElementById('location').textContent = 'Falha ao carregar'
    }
}

function getWeatherIcon(condition) {
    const icons = {
        Sunny: 'assets/icons/sunny.gif',
        Rain: 'assets/icons/rain.gif',
        Cloudy: 'assets/icons/cloudy.gif',
        Snow: 'assets/icons/snow.gif'
    }
    return icons[condition] || 'assets/icons/sunny.gif'
}

fetchWeatherData()
