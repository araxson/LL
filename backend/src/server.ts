import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Your other imports
import express from 'express';
import connectDB from './config/db';

const app = express();

// Database connection
connectDB();

// Your middlewares and routes here

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
