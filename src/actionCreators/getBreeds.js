import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export default function getBreeds() {
  return function getBreedsThunk(dispatch, getState) {
    const { animal } = getState();
    if (animal) {
      petfinder.breed.list({ animal }).then(data => {
        if (
          data.petfinder.breeds &&
          data.petfinder.breeds.breed &&
          Array.isArray(data.petfinder.breeds.breed)
        ) {
          dispatch({
            type: "SET_BREEDS",
            payload: data.petfinder.breeds.breed
          });
          dispatch({
            type: "SET_BREED",
            payload: data.petfinder.breeds.breed[0]
          });
        } else {
          dispatch({
            type: "SET_BREEDS",
            payload: []
          });
        }
      });
    } else {
      dispatch({
        type: "SET_BREEDS",
        payload: []
      });
    }
  };
}
