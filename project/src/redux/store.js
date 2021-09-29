import { createStore, combineReducers } from 'redux';
import { header_reducer, all_path_reducer } from './reducers/header_reducer'
import { sendPathReducer } from './reducers/main_reducer'

const allReducer = combineReducers({
  items: header_reducer,
  all_path: all_path_reducer,
  now_url_path: sendPathReducer
});

export default createStore(allReducer);