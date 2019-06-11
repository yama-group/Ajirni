import {FETCH_ITEM,SAVE_USER_ID} from "../actions/types"

const initialState = {

    item: {},
    userId:null
  };
  
  export default function(state = initialState, action) {
    if(action.type === FETCH_ITEM){
        return{
            ...state,
            item:action.itemRetrive
        }
    }
    if(action.type === SAVE_USER_ID){
      return{
          ...state,
          userId:action.saveId
      }
  }
    return state
  }