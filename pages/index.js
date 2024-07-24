import client from "../src/apollo/client";
import { GET_SITE_INFO } from "../src/queries/site-info";
import { GET_MENUS } from "../src/queries/get-menus";

export default function Page({ data }) {
  const { siteInfo } = data || {};

  console.warn(siteInfo);

  return <h2>Next Js 14 Home Page</h2>;
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_SITE_INFO,
  });

  return {
    props: {
      data: data || {},
    },
  };
}
