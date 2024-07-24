import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";

// Define the GraphQL query for the header and footer menus.
export const HeaderFooter = `
  siteInfo: generalSettings {
    title
    description
  }
  headerMenus: menuItems(where: {location: PRIMARY, parentId: "0"}) {
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
  footerMenus: menuItems(where: {location: FOOTER, parentId: "0"}) {
    edges {
      node {
        ...MenuFragment
      }
    }
  }
`;

export const GET_MENUS = gql`
query GET_MENUS {
  ${HeaderFooter}
}
  ${MenuFragment}
`;
