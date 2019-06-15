import { USER_ITEMS, NEW_ITEM  } from '../actions/types'

const initialState = {
  userItems: [],
  userId: 1
}

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_ITEMS:
      console.log(action.payload)
      return {
        ...state,
        userItems: action.payload
      }
    default:
      return state
  }
}