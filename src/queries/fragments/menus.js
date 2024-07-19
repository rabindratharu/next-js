import { gql } from "@apollo/client";

// Define a fragment for menu items
const MenuFragment = gql`
  fragment MenuFragment on MenuItem {
    id
    label
    url
    path
  }
`;
export default MenuFragment;
