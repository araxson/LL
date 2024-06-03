import { gql } from 'apollo-server-express';

const userSchema = gql`
  type User {
    id: ID!
    email: String!
    name: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getUser(id: ID!): User!
    getUsers: [User!]!
  }

  type Mutation {
    updateUser(id: ID!, input: UpdateUserInput!): User!
    deleteUser(id: ID!): User!
  }

  input UpdateUserInput {
    email: String
    name: String
    password: String
  }
`;

export default userSchema;
