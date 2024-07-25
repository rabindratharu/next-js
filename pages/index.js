import client from "../src/apollo/client";
import { GET_MENUS } from "../src/queries/get-menus";

export default function Page({ data }) {
  const { siteInfo, siteLogo, favIcon, headerMenus, footerMenus } = data || {};

  console.warn(headerMenus);

  return <h2>Next Js 14 Home Page</h2>;
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_MENUS,
  });

  return {
    props: {
      data: data || {},
    },
  };
}
