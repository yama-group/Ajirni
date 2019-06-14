import {FETCH_USER,FETCH_USER_ITEMS}from "./types"
import axios from "axios";

export const fetchUser = (para=1) => dispatch => {
    axios.get(`/userInfo/?user_id=${para}`)
    .then(users =>{
       let user =users.data[0]
       
      dispatch({
        type: FETCH_USER,
        user:user
    
        
      })
      return user
    }).then((user)=>{
      
        axios.get(`/userItems/?user_id=${user.id}`)
        .then((items)=>{
          
          dispatch({
            type:FETCH_USER_ITEMS,
            items:items.data
          })
        })
    })
  };


  