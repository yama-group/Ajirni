import {FETCH_ITEM ,SAVE_USER_ID}from "./types"
import axios from "axios";

export const fetchItem = (para=6) => dispatch => {
    axios.get(`/rud/${para}`).then(item =>{
        console.log(item.data)
      dispatch({
        type: FETCH_ITEM,
        itemRetrive: item.data
      })
    });
  };



  export const saveUserId = (id) => dispatch => {
    dispatch({
      type:SAVE_USER_ID,
      saveId:id
    })
  }
  