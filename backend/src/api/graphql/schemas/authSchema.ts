import { gql } from 'apollo-server-express';

const authSchema = gql`
  type User {
    id: ID!
    email: String!
    name: String!
    createdAt: String!
    updatedAt: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    login(email: String!, password: String!): AuthPayload!
  }

  type Mutation {
    register(email: String!, password: String!, name: String!): AuthPayload!
  }
`;

export default authSchema;
