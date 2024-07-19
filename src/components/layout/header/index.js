import { isEmpty } from "lodash";
import Link from "next/link";
const Header = ({ headerMenus }) => {
  if (isEmpty(headerMenus)) {
    return null;
  }
  return (
    <>
      <header>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          {headerMenus?.length ? (
            <div>
              {headerMenus?.map((menu) => {
                return (
                  <Link key={menu?.node.id} href={menu?.node?.path}>
                    {menu?.node?.label}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </nav>
        Header
      </header>
    </>
  );
};

export default Header;
