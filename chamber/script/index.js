// Reemplaza con tu propia clave API de OpenWeatherMap
const apiKey = 'e5a516cddfb0278ec648b96bc8a0bdb9';
const city = 'Lima,pe';  // Cambia Lima,pe por la ciudad que quieras

// URLs para obtener la información del clima
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

window.addEventListener('DOMContentLoaded', function() {
    // Obtener el clima actual
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('temp').textContent = `${Math.round(data.main.temp)}°C`;
            document.getElementById('weather-description').textContent = capitalizeWeather(data.weather[0].description);
            document.getElementById('high').textContent = `${Math.round(data.main.temp_max)}°C`;
            document.getElementById('low').textContent = `${Math.round(data.main.temp_min)}°C`;
            document.getElementById('humidity').textContent = `${data.main.humidity}%`;
            document.getElementById('sunrise').textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            document.getElementById('sunset').textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();
            document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        });

    // Obtener la previsión del clima para 3 días
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('forecast-today').textContent = `${Math.round(data.list[0].main.temp)}°C`;
            document.getElementById('forecast-wed').textContent = `${Math.round(data.list[8].main.temp)}°C`; // 24 horas después
            document.getElementById('forecast-thu').textContent = `${Math.round(data.list[16].main.temp)}°C`; // 48 horas después
        });
});

// Capitalizar la descripción del clima
function capitalizeWeather(description) {
    return description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
