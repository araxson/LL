import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from '../api/graphql/schemas';
import resolvers from '../api/graphql/resolvers';

const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const apolloServer = new ApolloServer({
  schema,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    return { token };
  },
});

apolloServer.applyMiddleware({ app, path: '/graphql' });

export default app;
