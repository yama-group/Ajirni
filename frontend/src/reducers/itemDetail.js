import {FETCH_ITEM,SAVE_USER_ID,FETCH_IMAGES} from "../actions/types"

const initialState = {

    item: {},
    userId:null,
    images:[],
    
  };
  
  export default function(state = initialState, action) {
    if(action.type === FETCH_ITEM){
        return{
            ...state,
            item:action.itemRetrive,
            
        }
    }
    if(action.type === SAVE_USER_ID){
      return{
          ...state,
          userId:action.saveId
      }
  }
  if(action.type === FETCH_IMAGES){
    
    return{
        ...state,
        images:action.images
    }
  }
    return state
  }