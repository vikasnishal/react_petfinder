import React from "react";
import { connect } from "react-redux";
import Pet from "./Pet";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate(prevProps) {
    console.dir(prevProps);
  }
  render() {
    return (
      <div>
        {this.props.pets.map(pet => {
          let breed;
          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(", ");
          } else {
            breed = pet.breeds.breed;
          }
          return (
            <Pet
              animal={pet.animal}
              key={pet.id}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
              id={pet.id}
            />
          );
        })}
      </div>
    );
  }
}

const stateToProps = ({ pets }) => ({
  pets
});
export default connect(stateToProps)(SearchResults);
