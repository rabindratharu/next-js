import client from "../src/apollo/client";
import Layout from "../src/components/layout";
import { GET_MENUS } from "../src/queries/get-menus";

export default function Page({ data }) {
  // console.log(data);
  return <Layout data={data}></Layout>;
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_MENUS,
  });

  return {
    props: {
      data: {
        header: {
          siteInfo: data?.siteInfo || [],
          siteLogo: data?.siteLogo || [],
          favIcon: data?.favIcon || [],
        },
        menus: {
          headerMenus: data?.headerMenus?.edges || [],
          footerMenus: data?.footerMenus?.edges || [],
        },
      },
    },
    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };
}
