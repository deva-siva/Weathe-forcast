
const apiKey = '5a83997651d0474787c84317250303';


async function updateWeather(city) {
    if (!city) return;
    
    const [lat, lon] = citylist[city];
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`;

    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        
        document.getElementById('cityName').textContent = `${data.location.name}, ${data.location.country}`;
        document.getElementById('latitude').textContent = data.location.lat;
        document.getElementById('longitude').textContent = data.location.lon;
        document.getElementById('Temperature').textContent = data.current.temp_c;
        document.getElementById('Feels-like').textContent = data.current.feelslike_c;
        document.getElementById('Condition').textContent = data.current.condition.text;
        document.getElementById('Humidity').textContent = data.current.humidity;
        document.getElementById('wind_speed').textContent = data.current.wind_kph;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}


document.getElementById('cities').addEventListener('change', (e) => {
    const selectedCity = e.target.value;
    updateWeather(selectedCity);
});