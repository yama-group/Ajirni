import { FETCH_ITEMS, NEW_ITEM, Item_id } from "../actions/types";

const initialState = {
  items: [],
  item: {},
  item_id: "",
  category_id:window.localStorage.getItem("category_id") || 2
};

export default function(state = initialState, actions) {
  switch (actions.type) {
    case FETCH_ITEMS:
      // console.log(actions.payload);
      return {
        ...state,
        items: actions.payload,
        category_id:localStorage.getItem("category_id")
      };
    case Item_id:
      // console.log(actions.payload);
      return {
        ...state,
        item_id: actions.payload
      };
    default:
      return state;
  }
}
