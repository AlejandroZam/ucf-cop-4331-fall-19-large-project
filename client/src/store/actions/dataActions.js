import axios from 'axios';
import {GET_RESTAURANTS, GET_MENU, CLEAR_MENU} from './constants';

export const getRestaurants = () => dispatch => 
{
    axios.get('/api/data/')
    .then(res => dispatch({
        type: GET_RESTAURANTS,
        payload: res.data
    }))
    .catch(err => {
        console.log("Error getting restaurant data...");
    });
}

export const getMenu = ({restaurantId}) => dispatch => 
{

  const body = JSON.stringify({restaurantId});

  axios.get('/api/data/', body)
  .then(res => dispatch({
      type: GET_MENU,
      payload: res.data
  }))
  .catch(err => {
      console.log("Error getting menu for restaurant" + restaurantId + "...");
  });
}

export const clearMenu = () => 
{

  return {
    type: CLEAR_MENU
  };
}