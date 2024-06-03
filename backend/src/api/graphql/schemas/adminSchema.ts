import { gql } from 'apollo-server-express';

const adminSchema = gql`
  type Admin {
    id: ID!
    email: String!
    name: String!
    role: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getAdmin(id: ID!): Admin!
    getAdmins: [Admin!]!
  }

  type Mutation {
    createAdmin(input: CreateAdminInput!): Admin!
    updateAdmin(id: ID!, input: UpdateAdminInput!): Admin!
    deleteAdmin(id: ID!): Admin!
  }

  input CreateAdminInput {
    email: String!
    name: String!
    role: String!
  }

  input UpdateAdminInput {
    email: String
    name: String
    role: String
  }
`;

export default adminSchema;
