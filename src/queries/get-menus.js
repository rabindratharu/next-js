import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";

export const GET_MENUS = gql`
  query getMenus {
    headerMenu: menuItems(where: { location: EXPANDED, parentId: "0" }) {
      edges {
        node {
          ...MenuFragment
          childItems {
            edges {
              node {
                ...MenuFragment
              }
            }
          }
        }
      }
    }
    footerMenu: menuItems(where: { location: FOOTER, parentId: "0" }) {
      edges {
        node {
          ...MenuFragment
        }
      }
    }
  }
  ${MenuFragment}
`;
