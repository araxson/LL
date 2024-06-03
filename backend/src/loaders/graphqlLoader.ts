import { ApolloServer } from 'apollo-server-express';
import typeDefs from '../api/graphql/schemas';
import resolvers from '../api/graphql/resolvers';

const graphqlLoader = (app) => {
  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app, path: '/graphql' });
};

export default graphqlLoader;
