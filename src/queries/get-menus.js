import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";

export const HeaderFooter = `
  header: getHeader {
    favicon
    siteLogoUrl
    siteTagLine
    siteTitle
  }
  headerMenus: menuItems(where: {location: EXPANDED, parentId: "0"}) {
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
  footer: getFooter {
    copyrightText
    sidebarOne
    sidebarTwo
    socialLinks {
      iconName
      iconUrl
    }
  }
`;

export const GET_MENUS = gql`
query GET_MENUS {
  ${HeaderFooter}
}
  ${MenuFragment}
`;
