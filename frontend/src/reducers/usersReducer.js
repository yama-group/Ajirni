import { FETCH_USERS } from "../actions/types";

const initialState = {
  users: []
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case FETCH_USERS:
      console.log(actions.payload)
      return {
        ...state,
        users: actions.payload,

      };
    default:
      return state;
  }
}