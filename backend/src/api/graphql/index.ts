import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schemas';
import resolvers from './resolvers';
import { graphqlUploadExpress } from 'graphql-upload';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
app.use(graphqlUploadExpress());

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    return { token };
  },
});

server.applyMiddleware({ app, path: '/graphql' });

export default app;
