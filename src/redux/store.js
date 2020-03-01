import {createStore, combineReducers} from 'redux'
import {todos, visibilityFilter} from './reducers'

export default createStore(combineReducers({todos, visibilityFilter}), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())