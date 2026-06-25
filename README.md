# 🌤️ Weather App

A clean, responsive weather web application that provides real-time weather information for any city around the world.

🔗 **Live Demo:** [Click here to view](https://shravan2420.github.io/weather-app/)

---

## 📸 Screenshots

| Home Screen | Search Result |
|-------------|---------------|
| ![Home]() | ![Result](screenshots/result.png) |

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Displays temperature, humidity, wind speed, and weather condition
- 🌦️ Dynamic weather icons based on current conditions
- 📱 Fully responsive design — works on mobile, tablet, and desktop
- ⚡ Real-time data fetched from OpenWeatherMap API
- 🎨 Clean and modern UI

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Structure & Markup |
| CSS3 | Styling, Flexbox/Grid, Animations |
| JavaScript (ES6+) | Logic, API calls, DOM Manipulation |
| OpenWeatherMap API | Real-time weather data |

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge)
- Free API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd weather-app
   ```

3. **Add your API Key**

   Open `script.js` (or whichever JS file has the API call) and replace:
   ```javascript
   const API_KEY = "YOUR_API_KEY_HERE";
   ```
   with your actual OpenWeatherMap API key.

4. **Run the app**

   Simply open `index.html` in your browser — no build tools needed!

---

## 📁 Project Structure

```
weather-app/
│
├── index.html        # Main HTML file
├── style.css         # All styles and responsive design
├── script.js         # JavaScript logic & API integration
├── /images           # Icons and assets (if any)
└── README.md         # Project documentation
```

---

## 🌐 API Used

- **[OpenWeatherMap API](https://openweathermap.org/api)** — Provides current weather data by city name.
- Endpoint used:
  ```
  https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
  ```

---

## 📌 Key Learnings

- Working with third-party REST APIs and handling JSON responses
- Asynchronous JavaScript using `fetch()` and `async/await`
- Building responsive layouts using CSS Flexbox/Grid
- DOM manipulation and dynamic UI updates based on API data
- Error handling for invalid city names or network issues

---

## 🔮 Future Improvements

- [ ] 5-day weather forecast view
- [ ] Auto-detect user location using Geolocation API
- [ ] Toggle between Celsius and Fahrenheit
- [ ] Dark mode support
- [ ] Weather background changes based on conditions

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-linkedin-url](https://linkedin.com/in/your-profile)
- Portfolio: [your-portfolio.com](https://your-portfolio.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **If you found this project helpful, please give it a star!**
