import React from "react";
import { Link } from "@reach/router";

const NavBar = () => (
  <header className="container">
    <Link to="/">Adopt Me!</Link>
    <Link to="/search-params">
      <span aria-label="search" role="img">
        🔍
      </span>
    </Link>
  </header>
);
export default NavBar;
