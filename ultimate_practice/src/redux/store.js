//引入createStore函数，用于创建store对象
import {createStore,combineReducers} from 'redux'

import {header} from './reducers/header'

const AllReducer = combineReducers({
    num: header
  });

export default createStore(AllReducer);