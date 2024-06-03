import { gql } from 'apollo-server-express';

const paymentSchema = gql`
  type Payment {
    id: ID!
    amount: Float!
    userId: ID!
    status: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getPayment(id: ID!): Payment!
    getPayments: [Payment!]!
  }

  type Mutation {
    createPayment(input: CreatePaymentInput!): Payment!
    updatePayment(id: ID!, input: UpdatePaymentInput!): Payment!
    deletePayment(id: ID!): Payment!
  }

  input CreatePaymentInput {
    amount: Float!
    userId: ID!
    status: String!
  }

  input UpdatePaymentInput {
    amount: Float
    status: String
  }
`;

export default paymentSchema;
