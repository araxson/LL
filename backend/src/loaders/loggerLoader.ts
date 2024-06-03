import logger from '../config/logger';

const loggerLoader = (app) => {
  app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
  });
};

export default loggerLoader;
