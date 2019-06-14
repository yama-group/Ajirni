import axios from "axios";
import { NEW_Item, NewItemImages } from "./types";
export const postItem = item => dispatch => {
  console.log(item);
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
  // axios
  //   .post("/images/", item.images)
  //   .then(response => {
  //     console.log(response);
  //     dispatch({
  //       type: NewItemImages,
  //       payload: response.data
  //     });
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
};
