import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export default function getPets() {
  return function getPetsThunk(disptach, getState) {
    let { location, animal, breed } = getState();
    petfinder.pet
      .find({
        location,
        animal,
        breed,
        output: "full"
      })
      .then(data => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }
        disptach({
          type: "SET_PETS",
          payload: pets
        });
      });
  };
}
