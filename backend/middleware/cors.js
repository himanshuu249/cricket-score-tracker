import cors from 'cors';

// CORS configuration to allow all requests
const corsOptions = {
  origin: '*', // Allow all origins
  credentials: true, // Allow credentials
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

export const corsMiddleware = cors(corsOptions);
