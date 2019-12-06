import {GET_MENU, CLEAR_MENU, GET_RESTAURANTS} from '../actions/constants'

const initalState =
{
    restaurantsLoaded: false,
    menuLoaded: false,
    restaurants: [],
    menu: []
};

const dataReducer = (state = initalState, action) => {
    switch (action.type) {
      case GET_RESTAURANTS:
        return{
          ...state,
          restaurants: action.payload,
          restaurantsLoaded: true
        } 
      case GET_MENU:
          return{
            ...state,
            menu: action.payload,
            menuLoaded: true
          } 
      case CLEAR_MENU:
          return{
            ...state,
            menu: [],
            menuLoaded: false
          }
      default:
        return state
    }
}

export default dataReducer;
