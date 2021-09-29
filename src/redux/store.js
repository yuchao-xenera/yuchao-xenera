import {createStore,combineReducers} from 'redux'
import {header_reducer,all_path_reducer} from '../redux/reducers/top_reducer'

const allReducer = combineReducers({
	items:header_reducer,
    all_path:all_path_reducer
})

export default createStore(allReducer);