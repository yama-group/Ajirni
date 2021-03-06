import { NEW_Item } from "../actions/types";

const initialState = {
  items: [],
  oneItem: {},
  category_id: window.localStorage.getItem("category_id") || 2,
  user_id: 1,
  confirm:false
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
