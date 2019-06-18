import axios from "axios";
import { NEW_Item, FETCH_ITEMS } from "./types";
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
    })
    .catch(error => {
      console.log(error);
    });
};

export const search = query => dispatch => {
  // console.log(query);
  
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
