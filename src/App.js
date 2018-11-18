import React from "react";
import { Router } from "@reach/router";
import pf from "petfinder-client";
import { Provider } from "./SearchContext";
import Results from "./Results";
import Details from "./Details";
import SearchParams from "./SearchParams";
import NavBar from "./NavBar";

const petfinder = pf({
  key: process.env.REACT_APP_PETFINDER_API_KEY,
  secret: process.env.REACT_APP_PETFINDER_API_SECRET
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
          <Router basepath={process.env.PUBLIC_URL}>
            <Results path="/" />
            <Details path="details/:id" />
            <SearchParams path="search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}
export default App;
