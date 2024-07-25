import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

import { isEmpty } from "lodash";

const Layout = ({ data, isPost, children }) => {
  const { header, menus } = data || {};

  // If it does not have either post or page.
  //   if (isEmpty(page) && isEmpty(post) && isEmpty(posts)) {
  //     return null;
  //   }

  console.log(data);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={header?.favIcon?.sourceUrl ?? ""} />
      </Head>
      <Header header={header} headerMenus={menus?.headerMenus} />
      <div className="md:container px-5 py-24 mx-auto min-h-almost-screen">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
