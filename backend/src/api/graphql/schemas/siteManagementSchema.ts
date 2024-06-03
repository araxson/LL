import { gql } from 'apollo-server-express';

const siteManagementSchema = gql`
  type SiteManagement {
    id: ID!
    siteName: String!
    siteUrl: String!
    contactEmail: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getSiteSettings: SiteManagement!
  }

  type Mutation {
    updateSiteSettings(input: UpdateSiteSettingsInput!): SiteManagement!
  }

  input UpdateSiteSettingsInput {
    siteName: String
    siteUrl: String
    contactEmail: String
  }
`;

export default siteManagementSchema;
