import Header from "./header";
import Footer from "./footer";

function Layout({ data, chiildrean }) {
  return (
    <>
      <Header headerMenus={data?.menus?.headerMenus} />
      Layout
      {chiildrean}
      <Footer />
    </>
  );
}

export default Layout;
