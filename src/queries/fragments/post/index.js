import { gql } from "@apollo/client";
import ImageFragment from "../image/index";

// Define a fragment for post
const PostFragment = gql`
  fragment PostFragment on Post {
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
  ${ImageFragment}
`;
export default PostFragment;
