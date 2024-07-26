import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import Seo from "../seo";
import { isEmpty } from "lodash";

const Layout = ({ data, isPost, children }) => {
  const { page, header, footer, headerMenus, footerMenus } = data || {};

  // If it does not have either post or page.
  if (isEmpty(page)) {
    return null;
  }

  const seo = page?.seo ?? {};
  const uri = page?.uri ?? {};

  console.log(data);
  return (
    <>
      <Seo seo={seo} uri={uri} />
      <Head>
        <link rel="shortcut icon" href={header?.favicon ?? ""} />
      </Head>
      <Header header={header} headerMenus={headerMenus?.edges} />
      <div className="md:container px-5 py-24 mx-auto min-h-almost-screen">
        {children}
      </div>
      <Footer footer={footer} footerMenus={footerMenus?.edges} />
    </>
  );
};

export default Layout;
