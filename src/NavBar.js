import React from "react";
import { Link } from "@reach/router";
import headerLogo from "./adopt-me.png";

const NavBar = () => (
  <div className="container">
    <Link to="/">
      <img src={headerLogo} alt="go to home page" width="100" />
    </Link>
    <Link to="/search-params">
      <span aria-label="search" role="img">
        🔍
      </span>
    </Link>
  </div>
);
export default NavBar;
