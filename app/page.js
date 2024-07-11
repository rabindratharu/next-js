/**
 * Internal Dependencies.
 */
import { HEADER_FOOTER_ENDPOINT } from "../utils/endpoints";

/**
 * External Dependencies.
 */
import axios from "axios";

const Home = async () => {
  const data = await getStaticProps();
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
};
export default Home;

const getStaticProps = async () => {
  const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);
  return {
    props: {
      headerFooter: headerFooterData?.data ?? {},
    },

    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };
};
