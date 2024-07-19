import { gql } from "@apollo/client";

/**
 * Get pages.
 *
 */
export const GET_PAGES_URI = gql`
  query getPagesUri {
    pages: pages(last: 1) {
      nodes {
        id
        uri
      }
    }
  }
`;
