import {
  SIGN_IN
} from '../actions/types'

const initialState = {
  userId: 1
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      console.log(action.payload)
      return {
        ...state,
        userId: action.payload
      }
      default:
        return state
  }
}