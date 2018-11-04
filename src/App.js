import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Loadable from "react-loadable";
import store from "./store";
import { Provider } from "react-redux";
/* below statements are commmented out becuase these components are loaded using code splitting */
// import Details from "./Details";
// import SearchParams from "./SearchParams";
// import Results from "./Results";
import NavBar from "./NavBar";

const LoadableDetails = Loadable({
  loader: () => import("./Details"),
  loading() {
    return <div>Loading split code</div>;
  }
});

const LoadableSearchParams = Loadable({
  loader: () => import("./SearchParams"),
  loading() {
    return <div>Loading split code</div>;
  }
});
const LoadableResults = Loadable({
  loader: () => import("./Results"),
  loading() {
    return <div>Loading split code</div>;
  }
});
class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Provider store={store}>
          <Router>
            <LoadableResults path="/" />
            <LoadableDetails path="/details/:id" />
            <LoadableSearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
