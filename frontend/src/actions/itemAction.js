import axios from "axios";
import { NEW_Item, FETCH_ITEMS } from "./types";
import {NotificationContainer,NotificationManager} from 'react-notifications';

export const postItem = item => dispatch => {
  // console.log(item.images);
  axios
    .post("/additem/", item.itemInfo)
    .then(response => {
      console.log(response);
      var item_id = response.data.id;
      for (let i = 0; i < item.images.length; i++) {
        var temp = { item_id: item_id, img_url: item.images[i] };
        axios.post("/images/", temp);
      }
      dispatch({
        type: NEW_Item,
        payload: response.data
      });

      NotificationManager.info("New Item added.");
      
    })
    .catch(error => {
      console.log(error);
      NotificationManager.warning( 'Try again','Ooh Sorry', 3000);
    });
};

export const search = (query,id) => dispatch => {
  console.log(id);
  window.localStorage.setItem("category_id",id)
  axios
    .get("/search/?" + query)
    .then(response => {
       console.log(response);
      dispatch({
        type: FETCH_ITEMS,
        payload: response.data
      });
    })
    .catch(error => {
      // console.log(error);
    });
};
