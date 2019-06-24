import { FETCH_USER, FETCH_USER_ITEMS, UPDATE_ITEM } from "./types";
import axios from "axios";
import {NotificationContainer,NotificationManager} from 'react-notifications';


export const fetchUser = (para = 7) => dispatch => {
  axios
    .get(`/userInfo/?user_id=${para}`)
    .then(users => {
      let user = users.data[0];

      dispatch({
        type: FETCH_USER,
        user: user
      });
      return user;
    })
    .then(user => {
      axios.get(`/userItems/?user_id=${user.id}`).then(items => {
       
        dispatch({
          type: FETCH_USER_ITEMS,
          items: items.data
        });
      });
    });
};

export const updateItem = (item, id) => dispatch => {
  axios
    .put(`/rud/${id}`, { ...item })
    .then(update => {
      console.log(update)
      NotificationManager.success(`${update.data.name} updated.`)
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteItem = id => dispatch => {
  axios
    .delete(`/rud/${id}`)
    .then(deleted => {
      NotificationManager.error(`Item deleted.`)
    })
    .catch(err => {
      console.log(err);
    });
};
