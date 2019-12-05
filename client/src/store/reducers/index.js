import {combineReducers} from 'redux';
import dataReducer from './data';

export default combineReducers({
  customers: dataReducer
})
