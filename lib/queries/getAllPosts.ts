import { gql } from "@apollo/client";
import client from "@/lib/apollo";

/**
 * Fetch all blog posts.
 */
export default async function getAllPosts() {
  // Format your GraphQL query using backticks `` and prepend gql
  const GET_POSTS = gql`
    query AllPostsQuery {
      posts {
        nodes {
          title
          content
          date
          uri
        }
      }
    }
  `;
  // Here we make a call with the client and pass in our query string to the
  // configuration objects 'query' property
  const response = await client.query({
    query: GET_POSTS,
  });
  // Once we get the response back, we need to traverse it to pull out the
  // data we want to pass into the HomePage

  const posts = response?.data?.posts?.nodes;

  // const posts = await getAllPosts()

  return {
    props: {
      posts,
    },
  };
}
