import { LIKES_PAGE } from "../actions/types";

const initialState = {
  userItems: [],
  userId: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LIKES_PAGE:
      // console.log(this.initialState.userItems)
      console.log(action.payload)
      return {
        ...state,
        userItems: action.payload
      }
    default:
      return state;
  }
}
