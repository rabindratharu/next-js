import { isEmpty } from "lodash";
import Link from "next/link";
import { useState } from "react";
import PropTypes from "prop-types";

import { isCustomPageUri } from "../../../utils/slug";

const Nav = ({ header, headerMenus }) => {
  if (isEmpty(headerMenus)) {
    return null;
  }

  const [isMenuVisible, setMenuVisibility] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <img
            src={header?.siteLogoUrl ?? ""}
            alt=""
            width="48"
            height="48"
            className="mr-4"
          />
        </Link>
        <div className="flex flex-col items-start justify-start">
          <span className="font-semibold text-xl tracking-tight">
            {header?.siteTitle}
          </span>
          <span>{header?.siteTagLine}</span>
        </div>
      </div>

      <div className="block lg:hidden">
        <button
          onClick={() => setMenuVisibility(!isMenuVisible)}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          data-cy="mmenu-btn"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuVisible ? "max-h-full" : "h-0"
        } overflow-hidden w-full lg:h-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        {headerMenus?.length ? (
          <div className="text-sm lg:flex-grow">
            {headerMenus?.map((menu) => {
              if (!isCustomPageUri(menu?.node?.path)) {
                return (
                  <Link
                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                    data-cy="nav-item"
                    key={menu?.node.id}
                    href={menu?.node?.path}
                  >
                    {menu?.node?.label}
                  </Link>
                );
              }
            })}
          </div>
        ) : null}
        <div className="flex-col-reverse flex lg:flex-row">
          <div className="lg:flex items-center">
            <Link
              className="lg:ml-2 inline-block text-sm px-4 py-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              href="#"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  headerMenus: PropTypes.array,
};

export default Nav;
