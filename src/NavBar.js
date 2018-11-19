import React from "react";
import { Link } from "@reach/router";
import styled from "react-emotion";
import headerLogo from "./adopt-me.png";

const Container = styled("header")`
  background-color: #333;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavBar = () => (
  <Container>
    <Link to="/">
      <img src={headerLogo} alt="go to home page" width="100" />
    </Link>
    <Link to="/search-params">
      <span aria-label="search" role="img">
        🔍
      </span>
    </Link>
  </Container>
);
export default NavBar;
