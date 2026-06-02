# Cricket Score Tracker - Backend API

Node.js/Express backend API for the cricket score tracking application.

## Installation

```bash
cd backend
npm install
```

## Configuration

1. Create a `.env` file from `.env.example`:
```bash
cp .env.example .env
```

2. Update the environment variables:
```
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:3000
```

## Running the Server

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Matches
- `GET /api/matches` - Get all matches
- `GET /api/matches/:id` - Get match by ID
- `POST /api/matches` - Create new match (authenticated)
- `PUT /api/matches/:id` - Update match (authenticated)
- `DELETE /api/matches/:id` - Delete match (authenticated)
- `PUT /api/matches/:id/score` - Update match score (authenticated)

### Users
- `GET /api/users/profile` - Get user profile (authenticated)
- `PUT /api/users/profile` - Update user profile (authenticated)

### Health
- `GET /api/health` - Check API health

## Database Models

### User
- name, email, password, role, teams, timestamps

### Match
- title, team1, team2, status, matchType, venue, date, toss, result, balls, timestamps

### Player
- name, team, role, stats, timestamps

### Team
- name, captain, players, stats, timestamps
