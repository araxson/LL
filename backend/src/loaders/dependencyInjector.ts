import { Container } from 'typedi';
import mongooseLoader from './mongooseLoader';
import redisLoader from './redisLoader';

const dependencyInjector = async () => {
  await mongooseLoader();
  const redisClient = redisLoader();

  Container.set('redisClient', redisClient);
};

export default dependencyInjector;
