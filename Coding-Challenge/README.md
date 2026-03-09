# 🌤️ Weather Checker App

A beautiful, modern weather application built for the **100 Days Coding Challenge**. This app fetches real-time weather data using the OpenWeatherMap API and displays it with stunning glassmorphism design and smooth animations.

## ✨ Features

- 🌍 **Real-time Weather Data** - Fetches current weather information from OpenWeatherMap API
- 📍 **Geolocation Support** - Automatically detects your location and shows local weather
- 🔍 **City Search** - Search for weather in any city worldwide
- 🎨 **Dynamic Backgrounds** - Background gradient changes based on weather conditions
- 💫 **Smooth Animations** - Beautiful micro-animations and transitions
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎭 **Glassmorphism Design** - Modern, premium UI with glass effects
- 🌡️ **Comprehensive Data** - Temperature, humidity, wind speed, pressure, and visibility

## 🚀 Getting Started

### Prerequisites

1. A modern web browser (Chrome, Firefox, Safari, Edge)
2. An OpenWeatherMap API key (free)

### Setup Instructions

#### Step 1: Get Your API Key

1. Visit [OpenWeatherMap](https://home.openweathermap.org/)
2. Click on **Sign Up** (or **Sign In** if you already have an account)
3. After signing in, go to **API Keys** section
4. Copy your API key (it looks like: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`)

#### Step 2: Configure the App

1. Open `script.js` in your code editor
2. Find line 2 that says:
   ```javascript
   const API_KEY = 'YOUR_API_KEY_HERE';
   ```
3. Replace `'YOUR_API_KEY_HERE'` with your actual API key:
   ```javascript
   const API_KEY = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6';
   ```
4. Save the file

#### Step 3: Run the App

1. Open `index.html` in your web browser
2. Allow location access when prompted (optional)
3. Start checking the weather! 🎉

## 📂 Project Structure

```
Coding-Challenge/
│
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── script.js           # JavaScript logic and API calls
└── README.md           # This file
```

## 🎯 How to Use

1. **Automatic Location**: When you first open the app, it will try to detect your location and show local weather
2. **Search for Cities**: Type any city name in the search box and click "Search" or press Enter
3. **View Details**: See temperature, weather condition, humidity, wind speed, pressure, and visibility
4. **Dynamic Experience**: Watch the background change based on weather conditions!

## 🎨 Features Breakdown

### Weather Data Displayed
- 🌡️ Current temperature (in Celsius)
- 🤔 "Feels like" temperature
- ☁️ Weather condition description
- 💧 Humidity percentage
- 💨 Wind speed (m/s)
- 🌡️ Atmospheric pressure (hPa)
- 👁️ Visibility (km)
- 📍 Location name and country
- 📅 Current date

### Dynamic Backgrounds
The app changes its background gradient based on:
- ☀️ Clear/Sunny weather
- ☁️ Cloudy conditions
- 🌧️ Rain/Drizzle/Thunderstorm
- 🌙 Night time
- ❄️ Snow/Mist/Fog

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Glassmorphism, gradients, animations
- **JavaScript (ES6+)** - API integration, DOM manipulation
- **OpenWeatherMap API** - Real-time weather data
- **Geolocation API** - Automatic location detection

## 🎓 Learning Outcomes

This project helps you understand:
- ✅ Working with external APIs
- ✅ Handling asynchronous JavaScript (async/await)
- ✅ DOM manipulation
- ✅ Error handling and user feedback
- ✅ Responsive design principles
- ✅ Modern CSS techniques (glassmorphism, gradients)
- ✅ Geolocation API usage
- ✅ Dynamic UI updates based on data

## 🐛 Troubleshooting

### API Key Issues
- **Error: "Invalid API key"** - Make sure you copied the entire API key correctly
- **Error: "City not found"** - Check the spelling of the city name
- **No data showing** - Wait a few minutes after creating your API key (it takes time to activate)

### Location Issues
- **Location not detected** - Make sure you allow location access in your browser
- **Wrong location** - Your IP-based location might not be accurate; use the search instead

### General Issues
- **App not loading** - Make sure all three files (HTML, CSS, JS) are in the same folder
- **Styles not working** - Clear your browser cache and refresh
- **API not responding** - Check your internet connection

## 📝 API Rate Limits

The free OpenWeatherMap API allows:
- 60 calls per minute
- 1,000,000 calls per month

This is more than enough for personal use!

## 🌟 Future Enhancements

Ideas for extending this project:
- [ ] 5-day weather forecast
- [ ] Hourly forecast
- [ ] Weather alerts
- [ ] Multiple location favorites
- [ ] Temperature unit toggle (Celsius/Fahrenheit)
- [ ] Weather maps
- [ ] Historical weather data

## 📄 License

This project is part of the 100 Days Coding Challenge and is free to use for learning purposes.

## 🙏 Credits

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons from OpenWeatherMap
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Happy Coding! 🚀**

*Part of the 100 Days Coding Challenge*
