export default function breedReducer(state = "", action) {
  if (action.type === "SET_ANIMAL") {
    return "";
  } else if (action.type === "SET_BREED") {
    return action.payload;
  } else {
    return state;
  }
}
