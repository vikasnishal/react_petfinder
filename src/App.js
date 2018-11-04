import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import pf from "petfinder-client";
import { Provider } from "./SearchContext";
import Loadable from "react-loadable";
/* below statements are commmented out becuase these components are loaded using code splitting */
// import Details from "./Details";
// import SearchParams from "./SearchParams";
// import Results from "./Results";
import NavBar from "./NavBar";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

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
  constructor(props) {
    super(props);

    this.state = {
      location: "Seattle WA",
      animal: "",
      breed: "",
      breeds: [],
      handleLocationChange: this.handleLocationChange,
      handleBreedChange: this.handleBreedChange,
      handleAnimalChange: this.handleAnimalChange,
      getBreeds: this.getBreeds
    };
  }
  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };
  handleAnimalChange = event => {
    this.setState(
      {
        animal: event.target.value
      },
      this.getBreeds
    );
  };
  handleBreedChange = event => {
    this.setState({
      breed: event.target.value
    });
  };
  getBreeds() {
    if (this.state.animal) {
      petfinder.breed
        .list({ animal: this.state.animal })
        .then(data => {
          if (
            data.petfinder &&
            data.petfinder.breeds &&
            Array.isArray(data.petfinder.breeds.breed)
          ) {
            this.setState({
              breeds: data.petfinder.breeds.breed
            });
          } else {
            this.setState({ breeds: [] });
          }
        })
        .catch(console.error);
    } else {
      this.setState({
        breeds: []
      });
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <Provider value={this.state}>
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
