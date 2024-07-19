import { isEmpty } from "lodash";
import Link from "next/link";
import PropTypes from "prop-types";

import { isCustomPageUri } from "../../../utils/slug";

const Nav = ({ headerMenus }) => {
  if (isEmpty(headerMenus)) {
    return null;
  }

  console.log(headerMenus);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div>
        {headerMenus?.length ? (
          <div className="text-sm lg:flex-grow">
            {headerMenus?.map((menu) => {
              if (!isCustomPageUri(menu?.node?.path)) {
                return (
                  <Link key={menu?.node.id} href={menu?.node?.path}>
                    {menu?.node?.label}
                  </Link>
                );
              }
            })}
          </div>
        ) : null}
      </div>
    </nav>
  );
};
export default Nav;
