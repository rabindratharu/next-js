import { gql } from "@apollo/client";
import SeoFragment from "../fragments/seo";
import { HeaderFooter } from "../get-menus";
import PostFragment from "../fragments/post";

/**
 * Get News Posts
 *
 */
export const GET_NEWS = gql`
 query getNews( $uri: String, $first: Int, $after: String ) {
 ${HeaderFooter}
  page: pageBy(uri: $uri) {
    id
    title
    content
    slug
    uri
    seo {
      ...SeoFragment
    }
  }
  posts: posts(first: $first, after: $after) {
    edges {
      node {
        ...PostFragment
      }
    }
    pageInfo {
      offsetPagination {
        total
      }
      hasNextPage
      endCursor
    }
  }
 }
 ${SeoFragment}
 ${PostFragment}
 `;
