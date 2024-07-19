import { gql } from "@apollo/client";

// Define a fragment for image
const ImageFragment = gql`
  fragment ImageFragment on MediaItem {
    sourceUrl
    altText
  }
`;
export default ImageFragment;
