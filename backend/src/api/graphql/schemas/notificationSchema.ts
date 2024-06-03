import { gql } from 'apollo-server-express';

const notificationSchema = gql`
  type Notification {
    id: ID!
    message: String!
    userId: ID!
    read: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getNotification(id: ID!): Notification!
    getNotifications: [Notification!]!
  }

  type Mutation {
    createNotification(input: CreateNotificationInput!): Notification!
    updateNotification(id: ID!, input: UpdateNotificationInput!): Notification!
    deleteNotification(id: ID!): Notification!
  }

  input CreateNotificationInput {
    message: String!
    userId: ID!
  }

  input UpdateNotificationInput {
    message: String
    read: Boolean
  }
`;

export default notificationSchema;
