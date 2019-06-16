import { FETCH_ITEMS, NEW_ITEM, Item_id } from "../actions/types";

const initialState = {
  items: [],
  item: {},
  item_id: ""
};

export default function(state = initialState, actions) {
  switch (actions.type) {
    case FETCH_ITEMS:
      // console.log(actions.payload);
      return {
        ...state,
        items: actions.payload
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
