import { gql } from 'apollo-server-express';

const searchSchema = gql`
  type Search {
    id: ID!
    query: String!
    userId: ID!
    results: [String!]!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getSearch(id: ID!): Search!
    getSearches: [Search!]!
  }

  type Mutation {
    createSearch(input: CreateSearchInput!): Search!
    updateSearch(id: ID!, input: UpdateSearchInput!): Search!
    deleteSearch(id: ID!): Search!
  }

  input CreateSearchInput {
    query: String!
    userId: ID!
    results: [String!]!
  }

  input UpdateSearchInput {
    query: String
    results: [String!]
  }
`;

export default searchSchema;
