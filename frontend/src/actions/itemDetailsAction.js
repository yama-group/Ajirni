import {FETCH_ITEM }from "./types"
import axios from "axios";

export const fetchItem = (para=1) => dispatch => {
    axios.get(`/rud/${para}`).then(item =>{
        console.log(item.data)
      dispatch({
        type: FETCH_ITEM,
        itemRetrive: item.data
      })
    });
  };