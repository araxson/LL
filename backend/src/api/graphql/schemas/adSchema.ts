import { gql } from 'apollo-server-express';

const adSchema = gql`
  type Ad {
    id: ID!
    title: String!
    description: String!
    price: Float!
    userId: ID!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getAd(id: ID!): Ad!
    getAds: [Ad!]!
  }

  type Mutation {
    createAd(input: CreateAdInput!): Ad!
    updateAd(id: ID!, input: UpdateAdInput!): Ad!
    deleteAd(id: ID!): Ad!
  }

  input CreateAdInput {
    title: String!
    description: String!
    price: Float!
    userId: ID!
  }

  input UpdateAdInput {
    title: String
    description: String
    price: Float
  }
`;

export default adSchema;
