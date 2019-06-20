import {GET_REVIEWS} from "../actions/types"

const initialState = {
  itemReviews: [],
  itemId: 19
}

export default function(state = initialState, action){
  switch(action.type){
    case GET_REVIEWS:
      console.log(action.payload)
      return {
        ...state,
        itemReviews: action.payload
      }
      default:
        return state;

  }
}