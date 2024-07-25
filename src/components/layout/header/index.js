import { isEmpty } from "lodash";
import PropTypes from "prop-types";

import Nav from "./nav";
const Header = ({ headerMenus }) => {
  if (isEmpty(headerMenus)) {
    return null;
  }

  return (
    <header>
      <Nav headerMenus={headerMenus} />
    </header>
  );
};

Header.propTypes = {
  headerMenus: PropTypes.array,
};

export default Header;
