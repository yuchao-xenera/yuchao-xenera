//引入Redux，重点，不是 from ’store‘！！！
import {createStore,applyMiddleware,combineReducers} from 'redux'
import headerBar from './reducers/headerBar'
import leftBar from './reducers/leftBar'
import thunk from 'redux-thunk'

//为了支持开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'

const allReducers = combineReducers({
    key:headerBar,
    temp:leftBar
})

/**
 * 创建store，并传入reducer
 */
const store = createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))

export default store