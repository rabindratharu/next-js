import { isEmpty } from "lodash";
import PropTypes from "prop-types";

import Nav from "./nav";
const Header = ({ header, headerMenus }) => {
  if (isEmpty(headerMenus)) {
    return null;
  }

  return (
    <header>
      <Nav header={header} headerMenus={headerMenus} />
    </header>
  );
};

Header.propTypes = {
  header: PropTypes.object,
  headerMenus: PropTypes.array,
};

export default Header;
