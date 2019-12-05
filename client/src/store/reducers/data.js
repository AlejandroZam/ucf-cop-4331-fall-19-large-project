import {GET_MENU, CLEAR_MENU, GET_RESTAURANTS} from '../actions/constants'

const initalState =
{
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
      default:
        return state
    }
}

export default dataReducer;
