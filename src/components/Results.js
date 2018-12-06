import React from "react";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("results component mounted");
    // this.search();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("results comp update before data");
    console.dir(prevProps);
    console.log(prevState);
    console.log("results comp update after data");
    console.log(this.props);
    console.log(this.state);
  }
  render() {
    return (
      <div className="search">
        <SearchBox />
        <SearchResults />
      </div>
    );
  }
}

export default Results;
