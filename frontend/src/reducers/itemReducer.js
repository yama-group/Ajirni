import { NEW_Item } from "../actions/types";

const initialState = {
  items: [],
  oneItem: {},
  category_id: 1,
  user_id: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_Item:
      return {
        ...state,
        oneItem: action.payload
      };
    default:
      return state;
  }
}
