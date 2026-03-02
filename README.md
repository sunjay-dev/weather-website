# Weather Web App 🌦️

A lightning-fast, modern weather web application built with Next.js. It allows users to search for the weather of any city or detect their exact coordinates to fetch real-time weather data.

<img src="https://github.com/user-attachments/assets/17ddcabf-2f7a-4c52-9b04-c7c97126c117" width="300" height="auto">

## Features

- **Search by City** – Enter a city name to get live weather updates with strict regex validation.
- **Detect Location** – Automatically fetch weather data for your current latitude/longitude via the Geolocation API.
- **Recent Searches** – Automatically saves your successful searches locally for quick, one-click access.
- **Responsive UI** – Built with Tailwind CSS for a modern, mobile-friendly experience.
- **Weather Details** – Includes temperature, rain probability, humidity, hourly data, and a 3-day forecast.

## Technologies Used

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Lucide React](https://img.shields.io/badge/Lucide_React-F28D1A?style=for-the-badge&logo=lucide&logoColor=white) ![React Hot Toast](https://img.shields.io/badge/React_Hot_Toast-FF4154?style=for-the-badge&logo=react&logoColor=white) ![RapidAPI](https://img.shields.io/badge/RapidAPI-005571?style=for-the-badge&logo=rapid&logoColor=white)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sunjay-dev/weather-website.git
cd weather-website
```

2. Install dependencies (using pnpm):

```bash
pnpm install
```

3. Set up your **.env.local** file at the root of your project:

> **Note:** You can get your free API key directly from [RapidAPI / WeatherAPI.com](https://rapidapi.com/weatherapi/api/WeatherAPI.com).

```env
RAPID_API_KEY=your_weatherapi_key_here
```

4. Start the server:

```bash
pnpm dev
```

## License

This project is open-source and available under the **MIT License**.
