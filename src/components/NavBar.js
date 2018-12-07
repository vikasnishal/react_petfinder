import React from "react";
import { Link } from "@reach/router";
// import headerLogo from "../adopt-me.png";

class NavBar extends React.Component {
  componentDidMount() {
    console.log("navar componentdidmount called");
  }
  componentWillUnmount() {
    console.log("navbar component unmounted");
  }
  componentDidUpdate() {
    console.log("navbar component updated");
  }
  render() {
    return (
      <header className="container">
        <Link to={process.env.REACT_APP_PUBLIC_URL}>
          Adopt Me!
          {/* <img src={headerLogo} alt="go to home page" width="100" /> */}
        </Link>
        <Link to={`${process.env.REACT_APP_PUBLIC_URL}/search-params`}>
          <span aria-label="search" role="img">
            🔍
          </span>
        </Link>
      </header>
    );
  }
}
export default NavBar;
