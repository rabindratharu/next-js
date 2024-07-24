import { gql } from "@apollo/client";

// Define the GraphQL query for the header and footer menus.
export const SiteInfo = `
  siteInfo: generalSettings {
    title
    description
  }
`;

export const GET_SITE_INFO = gql`
query GET_SITE_INFO {
  ${SiteInfo}
}
`;
