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
        document.getElementById('datetime').textContent = formatDate(data.timestamp)
        document.getElementById('temperature').textContent = data.temp
        document.getElementById('humidity').textContent = data.humidity
        document.getElementById('wind-speed').textContent = data.windSpeed
        document.getElementById('pressure').textContent = data.pressure

        const icon = document.querySelector('.weather-icon')
        icon.src = getWeatherIcon(data.condition)
        icon.alt = data.condition
    } catch (error) {
        console.error('Erro ao buscar dados da estação:', error)
        document.getElementById('location').textContent = 'Falha ao carregar'
        document.getElementById('datetime').textContent = 'Falha ao carregar'
    }
}

function formatDate(dateString) {
    if (!dateString) return 'Data não disponível'

    const date = new Date(dateString)

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }

    const formatted = date.toLocaleString('pt-BR', options)

    return formatted.charAt(0).toUpperCase() + formatted.slice(1)
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
