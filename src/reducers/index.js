import { combineReducers } from "redux";
import location from "./location";
import breed from "./breed";
import animal from "./animal";
import breeds from "./breeds";
import pets from "./pets";

export default combineReducers({
  location,
  breed,
  animal,
  breeds,
  pets
});
