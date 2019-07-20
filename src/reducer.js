import { ADD_MODEL } from "./actions/test";

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_MODEL:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
