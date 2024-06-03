import Redis from 'ioredis';
import { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } from '../config/env';

const redisLoader = () => {
  const redis = new Redis({
    host: REDIS_HOST,
    port: REDIS_PORT,
    password: REDIS_PASSWORD,
  });

  redis.on('connect', () => {
    console.log('Redis connected');
  });

  redis.on('error', (error) => {
    console.error('Redis connection error:', error);
  });

  return redis;
};

export default redisLoader;
