import { gql } from "@apollo/client";
import SeoFragment from "../fragments/seo";
import { HeaderFooter } from "../get-menus";
import ImageFragment from "../fragments/image";

/**
 * Get Posts
 *
 */
export const GET_POSTS = gql`
  query GetPosts($uri: String, $perPage: Int, $offset: In) {
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
    posts: posts(where: { offsetPagination: { size: $perPage, offset: $offset }}) {
    edges {
      node {
        id
        title
        excerpt
        slug
        featuredImage {
          node {
            ...ImageFragment
          }
        }
      }
    }
    pageInfo {
      offsetPagination {
        total
      }
    }
  }
  }
  ${ImageFragment}
  ${SeoFragment}
`;

/**
 * Get posts count.
 *
 */
export const GET_TOTAL_POSTS_COUNT = gql`
  query GetTotalPostsCount {
    postsCount: posts {
      pageInfo {
        offsetPagination {
          total
        }
      }
    }
  }
`;

/**
 * Get post slugs.
 *
 */
export const GET_POST_SLUGS = gql`
  query GetPostSlugs {
    posts: posts(last: 1) {
      nodes {
        id
        slug
      }
    }
  }
`;
