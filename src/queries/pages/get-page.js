import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import { HeaderFooter } from "../get-menus";

export const GET_PAGE = gql`
	query GET_PAGE($uri: String) {
      ${HeaderFooter}
	  page: pageBy(uri: $uri) {
	    id
	    title
	    content
	    slug
	    uri
	  }
	}
	${MenuFragment}
`;

export const GET_PAGE_BY_ID = gql`
	query GET_PAGE_BY_ID($id: ID!) {
		${HeaderFooter}
	  page(idType: DATABASE_ID, id: $id) {
	    id
	    title
	    content
	    slug
	    uri
		status
	  }
	}
	${MenuFragment}
`;
