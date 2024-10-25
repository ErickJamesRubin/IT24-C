class WeatherApp {
    constructor() {
        // API Key Input
        this.apiKey = document.getElementById('apiKeyInput');
        
        // City Input
        this.cityInput = document.getElementById('cityInput');
        this.getWeatherBtn = document.getElementById('getWeatherBtn');

        // Geolocation Input
        this.getLocationBtn = document.getElementById('getLocationBtn');

        // Weather Card
        this.weatherCard = document.getElementById('weatherCard');
        this.cityName = document.getElementById('cityName');
        this.temperature = document.getElementById('temperature');
        this.description = document.getElementById('description');
        this.humidity = document.getElementById('humidity');
        this.windSpeed = document.getElementById('windSpeed');
        this.weatherIcon = document.getElementById('weatherIcon');

        // Event Listeners
        this.getWeatherBtn.addEventListener('click', () => this.fetchWeather());
        this.getLocationBtn.addEventListener('click', () => this.fetchWeatherByLocation());
    }




}