// Seleccionamos los elementos HTML donde mostraremos la información
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDescription = document.querySelector('#weather-description');
const highTemp = document.querySelector('#high');
const lowTemp = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

// API Key de OpenWeatherMap (reemplaza con tu propia clave)
const apiKey = 'ce72cb2ea83074df0f14d8453f900107';
const lat = '12.0464';  // Lima, Perú (latitud)
const lon = '-77.0428'; // Lima, Perú (longitud)
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

// Función para obtener y mostrar los datos del clima
async function getWeatherData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Mostrar los datos en los elementos HTML
        currentTemp.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        highTemp.textContent = `${Math.round(data.main.temp_max)}°C`;
        lowTemp.textContent = `${Math.round(data.main.temp_min)}°C`;
        humidity.textContent = `${data.main.humidity}%`;
        sunrise.textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        sunset.textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        
        // Establecer el icono del clima
        const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIcon.setAttribute('src', iconSrc);
        weatherIcon.setAttribute('alt', data.weather[0].description);
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Llamar a la función para obtener los datos del clima
getWeatherData();
