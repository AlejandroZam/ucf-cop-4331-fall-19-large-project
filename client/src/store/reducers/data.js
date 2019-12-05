import {GET_MENU, CLEAR_MENU, GET_RESTAURANTS, SET_LOADED} from '../actions/constants'

const initalState =
{
    isLoaded: false,
    restaurants: [],
    menu: []
};

const dataReducer = (state = initalState, action) => {
    switch (action.type) {
      case GET_RESTAURANTS:
        return{
          ...state,
          restaurants: action.payload
        } 
      case GET_MENU:
          return{
            ...state,
            menu: action.payload
          } 
      case CLEAR_MENU:
          return{
            ...state,
            menu: []
          }
      case SET_LOADED:
        return{
          ...state,
          isLoaded: true
        }
      default:
        return state
    }
}

export default dataReducer;
