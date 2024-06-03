import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../config/swagger.json';

const swaggerLoader = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

export default swaggerLoader;
