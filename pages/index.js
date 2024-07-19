import client from "../src/apollo/client";
import { GET_MENUS } from "../src/queries/get-menus";

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <div>
        <h1>Posts</h1>
        <ul></ul>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { data, errors } = await client.query({
    query: GET_MENUS,
  });

  const defaultProps = {
    props: {
      data: data || {},
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
