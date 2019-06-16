import { NEW_USER } from "../actions/types";

const initialState = {
  Msg: ''
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case NEW_USER:
      return {
        ...state,
        Msg: actions.payload,

      };
    default:
      return state;
  }
}
