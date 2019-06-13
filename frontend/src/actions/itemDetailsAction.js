import {FETCH_ITEM ,SAVE_USER_ID,FETCH_IMAGES}from "./types"
import axios from "axios";

export const fetchItem = (para=1) => dispatch => {
    axios.get(`/rud/${para}`)
    .then(item =>{
        
      dispatch({
        type: FETCH_ITEM,
        itemRetrive: item.data,
        
      })
      return item
    }).then((item)=>{
      console.log(item)
        axios.get(`/images/?id=${item.data.id}`)
        .then((images)=>{
          
          dispatch({
            type:FETCH_IMAGES,
            images:images.data
          })
        })
    })
  };



  export const saveUserId = (id) => dispatch => {
    dispatch({
      type:SAVE_USER_ID,
      saveId:id
    })
  }
  