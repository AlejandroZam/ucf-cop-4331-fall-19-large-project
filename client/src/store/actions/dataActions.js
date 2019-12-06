import axios from 'axios';
import {GET_RESTAURANTS, GET_MENU, CLEAR_MENU} from './constants';

export const getRestaurants = () => dispatch => 
{
    axios.get('/api/data/restaurant')
    .then(res => {
      dispatch({
        type: GET_RESTAURANTS,
        payload: res.data
      });
    })
    .catch(err => {
        console.log("Error getting restaurant data...");
    });
}

export const getMenu = (id) => dispatch => 
{

  axios.post('/api/data/getMenu', {'id': id})
  .then(res => {
    dispatch({
      type: GET_MENU,
      payload: res.data
    });
  })
  .catch(err => {
      console.log("Error getting menu for restaurant" + id + "...");
  });
}

export const clearMenu = () => 
{

  return {
    type: CLEAR_MENU
  };
}