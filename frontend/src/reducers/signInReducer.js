import {
  SIGN_IN
} from '../actions/types'

const initialState = {
  userId:null,
  token:null,
  visible:null,
  error:""
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      
      return {
        ...state,
        token: action.payload,
        userId:action.userId,
        visible:action.visible,
        error:action.error
      }
      default:
        return state
  }
}