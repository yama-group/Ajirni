import {FETCH_ITEM} from "../actions/types"

const initialState = {

    item: {}
  };
  
  export default function(state = initialState, action) {
    if(action.type === FETCH_ITEM){
        return{
            ...state,
            item:action.itemRetrive
        }
    }
    return state
  }