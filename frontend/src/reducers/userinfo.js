import {FETCH_USER,FETCH_USER_ITEMS} from "../actions/types"


const initialState = {

    user: {},
    items:[]
    
  };

  export default function(state = initialState, action) {
    if(action.type === "FETCH_USER"){
        return {
            ...state,
            user:action.user
        }
    }
    if(action.type === "FETCH_USER_ITEMS"){
        return{
            ...state,
            items:action.items
        }
    }
    return state
  }
