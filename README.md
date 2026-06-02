# Cricket Score Tracking App

A full-stack web application to track cricket match scores in real-time with authentication and user management.

## Features

- **Real-time Score Tracking**: Live updates of match scores
- **User Authentication**: Secure login with JWT tokens
- **Match Management**: Create, update, and view cricket matches
- **Player Statistics**: Track player performance metrics
- **Responsive Design**: Works on desktop and mobile devices
- **Database Persistence**: MongoDB for data storage

## Tech Stack

### Frontend
- React 18
- Redux Toolkit for state management
- Axios for API calls
- Tailwind CSS for styling
- React Router for navigation

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- CORS enabled

### Deployment
- Vercel (Frontend)
- Render/Heroku (Backend)
- MongoDB Atlas (Database)

## Quick Start

1. Clone this repository
2. Install backend dependencies: `cd backend && npm install`
3. Install frontend dependencies: `cd frontend && npm install`
4. Configure environment variables (see DEPLOYMENT_GUIDE.md)
5. Run backend: `npm run dev` (from backend folder)
6. Run frontend: `npm run dev` (from frontend folder)

## Project Structure

```
├── backend/              # Node.js/Express API
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
├── frontend/             # React Application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
└── DEPLOYMENT_GUIDE.md
```

## Deployment

See **DEPLOYMENT_GUIDE.md** for step-by-step deployment instructions.
