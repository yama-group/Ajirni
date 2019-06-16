import { USER_ITEMS, USER_INFO } from "../actions/types";

const initialState = {
  userItems: [],
  userId: 1,
  userInfo: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_ITEMS:
      // console.log(action.payload)
      return {
        ...state,
        userItems: action.payload
      }
      case USER_INFO:
        console.log(action.payload)
        return {
          ...state,
          userInfo: action.payload
        }
    default:
      return state;
  }
}
