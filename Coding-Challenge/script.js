// OpenWeatherMap API Configuration
const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual API key from openweathermap.org
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const weatherDisplay = document.getElementById('weatherDisplay');
const loadingState = document.getElementById('loadingState');
const errorMessage = document.getElementById('errorMessage');

// Weather Data Elements
const locationName = document.getElementById('locationName');
const currentDate = document.getElementById('currentDate');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weatherDescription');
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const pressure = document.getElementById('pressure');
const visibility = document.getElementById('visibility');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    // Create animated background particles
    createBackgroundParticles();

    // Get user's current location weather on load
    getCurrentLocationWeather();

    // Event Listeners
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Update current date
    updateCurrentDate();
});

// Create animated background particles
function createBackgroundParticles() {
    const particlesContainer = document.querySelector('.background-particles');
    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random size between 20px and 80px
        const size = Math.random() * 60 + 20;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 15}s`;

        particlesContainer.appendChild(particle);
    }
}

// Update current date display
function updateCurrentDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDate.textContent = now.toLocaleDateString('en-US', options);
}

// Get current location weather using Geolocation API
function getCurrentLocationWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchWeatherByCoordinates(latitude, longitude);
            },
            (error) => {
                console.log('Geolocation error:', error);
                // Default to a popular city if geolocation fails
                fetchWeatherByCity('London');
            }
        );
    } else {
        // Geolocation not supported, use default city
        fetchWeatherByCity('London');
    }
}

// Handle search button click
function handleSearch() {
    const city = searchInput.value.trim();

    if (city === '') {
        showError('Please enter a city name');
        return;
    }

    fetchWeatherByCity(city);
}

// Fetch weather data by city name
async function fetchWeatherByCity(city) {
    showLoading();
    hideError();

    try {
        const url = `${API_BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found. Please check the spelling and try again.');
            } else if (response.status === 401) {
                throw new Error('Invalid API key. Please check your OpenWeatherMap API key.');
            } else {
                throw new Error('Failed to fetch weather data. Please try again later.');
            }
        }

        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
        showError(error.message);
    } finally {
        hideLoading();
    }
}

// Fetch weather data by coordinates
async function fetchWeatherByCoordinates(lat, lon) {
    showLoading();
    hideError();

    try {
        const url = `${API_BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch weather data for your location.');
        }

        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
        showError(error.message);
        // Fallback to default city
        fetchWeatherByCity('London');
    } finally {
        hideLoading();
    }
}

// Display weather data on the UI
function displayWeatherData(data) {
    // Extract data
    const cityName = data.name;
    const country = data.sys.country;
    const temp = Math.round(data.main.temp);
    const feels = Math.round(data.main.feels_like);
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const weatherMain = data.weather[0].main.toLowerCase();
    const humidityValue = data.main.humidity;
    const windValue = data.wind.speed;
    const pressureValue = data.main.pressure;
    const visibilityValue = (data.visibility / 1000).toFixed(1);

    // Update UI
    locationName.innerHTML = `<span class="location-icon">📍</span> ${cityName}, ${country}`;
    temperature.textContent = `${temp}°C`;
    weatherDescription.textContent = description;
    feelsLike.textContent = `Feels like ${feels}°C`;
    humidity.textContent = `${humidityValue}%`;
    windSpeed.textContent = `${windValue} m/s`;
    pressure.textContent = `${pressureValue} hPa`;
    visibility.textContent = `${visibilityValue} km`;

    // Update weather icon
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    weatherIcon.alt = description;

    // Update background based on weather condition
    updateBackground(weatherMain, iconCode);

    // Show weather display
    weatherDisplay.classList.add('active');

    // Clear search input
    searchInput.value = '';
}

// Update background gradient based on weather condition
function updateBackground(weatherMain, iconCode) {
    const body = document.body;

    // Remove all weather classes
    body.classList.remove('clear-day', 'clouds', 'rain', 'drizzle', 'thunderstorm', 'night', 'snow', 'mist', 'fog');

    // Check if it's night time (icon code ends with 'n')
    const isNight = iconCode.endsWith('n');

    if (isNight) {
        body.classList.add('night');
    } else {
        // Add class based on weather condition
        switch (weatherMain) {
            case 'clear':
                body.classList.add('clear-day');
                break;
            case 'clouds':
                body.classList.add('clouds');
                break;
            case 'rain':
                body.classList.add('rain');
                break;
            case 'drizzle':
                body.classList.add('drizzle');
                break;
            case 'thunderstorm':
                body.classList.add('thunderstorm');
                break;
            case 'snow':
                body.classList.add('snow');
                break;
            case 'mist':
            case 'fog':
            case 'haze':
                body.classList.add('mist');
                break;
            default:
                // Keep default gradient
                break;
        }
    }
}

// Show loading state
function showLoading() {
    loadingState.classList.add('active');
    weatherDisplay.classList.remove('active');
}

// Hide loading state
function hideLoading() {
    loadingState.classList.remove('active');
}

// Show error message
function showError(message) {
    errorMessage.querySelector('.error-text').textContent = message;
    errorMessage.classList.add('active');
    weatherDisplay.classList.remove('active');
}

// Hide error message
function hideError() {
    errorMessage.classList.remove('active');
}

// Add smooth scroll behavior for better UX
document.documentElement.style.scrollBehavior = 'smooth';
