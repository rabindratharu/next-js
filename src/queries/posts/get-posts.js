import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import SeoFragment from "../fragments/seo";
import { HeaderFooter } from "../get-menus";
import ImageFragment from "../fragments/image";

/**
 * Get Posts
 *
 */
export const GET_POSTS = gql`
  query GetPosts {
    posts {
      edges {
        node {
          id
          title
          excerpt
        }
      }
    }
  }
`;
