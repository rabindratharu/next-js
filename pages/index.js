import client from "../src/apollo/client";
import Layout from "../src/components/layout";
import { GET_MENUS } from "../src/queries/get-menus";

export default function Home({ data }) {
  return (
    <>
      <Layout data={data}>Layout</Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const { data, errors } = await client.query({
    query: GET_MENUS,
  });

  const defaultProps = {
    props: {
      data: {
        menus: {
          headerMenu: data?.headerMenu?.edges,
          footerMenu: data?.footerMenu?.edges,
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

  return defaultProps;
}
