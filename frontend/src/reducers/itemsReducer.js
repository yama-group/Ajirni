import { FETCH_ITEMS, NEW_ITEM } from '../actions/types'

const initialState = {
  items: [],
  item: {}
}

export default function (state = initialState, actions) {
  switch (actions.type) {
    case FETCH_ITEMS:
      console.log(actions.payload)
      return {
        ...state,
        items: actions.payload
      }
    default:
      return state
  }
}