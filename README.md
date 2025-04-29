# Weather Dashboard

A complete and modular software kit to create your own local weather station, including backend, frontend, and support for embedded system integration.

## Features

-   Receives real-time weather data from embedded systems
-   RESTful API with Node.js + Express
-   Frontend dashboard with automatic updates
-   MongoDB integration for data persistence (optional)

## Project Structure

```
weather-station-kit/
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── .env.example
│   └── index.js
├── frontend/
│   ├── assets/
│   ├── config.example.json
│   └── index.html
├── .gitignore
├── README.md
└── package.json
```

## Setup

### 1. Clone the repository

```bash
git clone <repo-url>
cd weather-dashboard
```

### 2. Backend setup

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### 3. Frontend setup

```bash
cd ../frontend
cp config.example.json config.json
# Edit config.json to set your backend API URL
# Open index.html in your browser
```

## Example API Request from Embedded System

```http
POST /api/weather HTTP/1.1
Host: your-server-ip
Content-Type: application/json

{
  "location": "My Backyard",
  "condition": "Sunny",
  "temperature": 26.4,
  "humidity": 50,
  "windSpeed": 12,
  "pressure": 1013
}
```
