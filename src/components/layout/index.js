import Header from "./header";

const Layout = ({ data, children }) => {
  return (
    <>
      <Header headerMenus={data?.menus?.headerMenu} />
      <div className="md:container px-5 py-24 mx-auto min-h-almost-screen">
        {children}
      </div>
    </>
  );
};

export default Layout;
