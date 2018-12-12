import React from "react";
import { ANIMALS } from "petfinder-client";
import { connect } from "react-redux";
import changeAnimal from "../actionCreators/changeAnimal";
import changeLocation from "../actionCreators/changeLocation";
import changeBreed from "../actionCreators/changeBreed";
import getBreeds from "../actionCreators/getBreeds";
import getPets from "../actionCreators/getPets";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  handleFormSubmit = event => {
    let { location, animal, breed } = this.props;
    event.preventDefault();
    this.props.search(location, animal, breed);
    this.ref.current.focus();
  };
  componentDidMount() {
    this.ref.current.focus();
    this.props.getBreeds();
    console.log(this.props.children);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("searchbox comp update before data");

    console.log(prevProps);
    console.log(prevState);
    console.log("searchbox comp update after data");
    console.log(this.props);
    console.log(this.state);
  }
  render() {
    var template = (
      <div className="search-params">
        <form onSubmit={this.props.getPets}>
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
    console.log(template);
    return template;
  }
}
const mapStateToProps = ({ location, animal, breed, breeds }) => ({
  location,
  animal,
  breed,
  breeds
});
const mapDispatchToProps = dispatch => ({
  getPets(event) {
    event.preventDefault();
    dispatch(getPets());
  },
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
