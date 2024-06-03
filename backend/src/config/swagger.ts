import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LuxList API',
      version: '1.0.0',
      description: 'API documentation for LuxList'
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server'
      }
    ]
  },
  apis: ['./src/api/rest/routes/*.ts']
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
