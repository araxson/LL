export default {
    port: process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
    mongoURI: process.env.MONGODB_URI || 'your_mongodb_uri'
  };
  