import { FETCH_ITEM,} from "./types";
import axios from "axios";

export const fetchItem = para => dispatch => {
  axios
    .get(`/items/?item_id=${para}`)
    .then(item => {
      window.localStorage.setItem("itemsUser",item.data[0].user)
      dispatch({
        type: FETCH_ITEM,
        itemRetrive: item.data[0],
        userId: item.data[0].user,
        images:item.data[0].images
      });
      
    }).catch((error)=>{
      console.log(error)
    })
};
