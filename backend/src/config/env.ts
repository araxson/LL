import dotenv from 'dotenv';

dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/luxlist';
export const JWT_SECRET = process.env.JWT_SECRET || 'sN5Z6jJhS1g4jYf0Qw8hQ9T7pJ8sW7vZk9G3sH2q';
export const PORT = process.env.PORT || 5000;
