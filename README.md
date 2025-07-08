# Mridangam Academy - Full Stack Application

A complete mridangam learning platform with React frontend and Express backend.

## Quick Start

1. Install all dependencies:
```bash
npm run install-all
```

2. Set up environment variables:
   - Copy `backend/.env.example` to `backend/.env`
   - Add your MongoDB connection string

3. Start the application:
```bash
npm start
```

This will launch both:
- Frontend (React + Vite) on http://localhost:5173
- Backend (Express API) on http://localhost:3001

## Development

- `npm start` - Run both frontend and backend
- `npm run frontend` - Run only frontend
- `npm run backend` - Run only backend
- `npm run build` - Build for production
- `npm run build:prod` - Build and start production server

## Production

1. Build the application:
```bash
npm run build
```

2. Start production server:
```bash
cd backend && npm start
```

The production server runs on http://localhost:3001 and serves both the React app and API.
