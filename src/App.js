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
import NavBar from "./components/NavBar";

const LoadableDetails = Loadable({
  loader: () => import("./components/Details"),
  loading() {
    return <div>Loading split code</div>;
  }
});

const LoadableSearchParams = Loadable({
  loader: () => import("./components/SearchParams"),
  loading() {
    return <div>Loading split code</div>;
  }
});
const LoadableResults = Loadable({
  loader: () => import("./components/Results"),
  loading() {
    return <div>Loading split code</div>;
  }
});
class App extends React.Component {
  componentDidMount() {
    console.log("app component mounted");
  }
  componentDidUpdate() {
    console.log("app component updated");
  }
  render() {
    return (
      <div>
        <NavBar />
        <Provider store={store}>
          <Router basepath={process.env.REACT_APP_PUBLIC_URL}>
            <LoadableResults path="/" />
            <LoadableDetails path="details/:id" />
            <LoadableSearchParams path="search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}
export default App;
ReactDOM.render(<App />, document.getElementById("root"));
