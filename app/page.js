/**
 * Internal Dependencies.
 */
import { HEADER_FOOTER_ENDPOINT } from "../src/utils/constants/endpoints";
import Header from "../src/components/header/index.jsx";

/**
 * External Dependencies.
 */
import axios from "axios";

const Home = async () => {
  const data = await getStaticProps();
  return (
    <div>
      <h1>Data fetched with App Router</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
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
