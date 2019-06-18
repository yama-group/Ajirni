import { NEW_USER } from "../actions/types";

const initialState = {
  Msg: '',
  done:null
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case NEW_USER:
      return {
        ...state,
        Msg: actions.payload,
        done:actions.done

      };
    default:
      return state;
  }
}
