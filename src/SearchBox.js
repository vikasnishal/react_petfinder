import React from "react";
import { ANIMALS } from "petfinder-client";
import { connect } from "react-redux";
import changeAnimal from "./actionCreators/changeAnimal";
import changeLocation from "./actionCreators/changeLocation";
import changeBreed from "./actionCreators/changeBreed";
import getBreeds from "./actionCreators/getBreeds";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.search();
    this.ref.current.focus();
  };
  componentDidMount() {
    this.ref.current.focus();
    this.props.getBreeds();
  }
  render() {
    return (
      <div className="search-params">
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="location">
            Location
            <input
              id="location"
              ref={this.ref}
              onChange={this.props.handleLocationChange}
              value={this.props.location}
              placeholder="Location"
            />
          </label>
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={this.props.animal}
              onChange={this.props.handleAnimalChange}
              onBlur={this.props.handleAnimalChange}
            >
              <option />
              {ANIMALS.map(animal => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="breed">
            Breed
            <select
              disabled={!this.props.breeds.length}
              id="breed"
              value={this.props.breed}
              onChange={this.props.handleBreedChange}
              onBlur={this.props.handleBreedChange}
            >
              <option />
              {this.props.breeds.map(breed => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = ({ location, animal, breed, breeds }) => ({
  location,
  animal,
  breed,
  breeds
});
const mapDispatchToProps = dispatch => ({
  getBreeds() {
    dispatch(getBreeds());
  },
  handleAnimalChange(event) {
    dispatch(changeAnimal(event.target.value));
    dispatch(getBreeds());
  },
  handleLocationChange(event) {
    dispatch(changeLocation(event.target.value));
  },
  handleBreedChange(event) {
    dispatch(changeBreed(event.target.value));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
