import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import driverReducer from '../drivers/reducers'
import { requestMiddleware } from './middlewares'

const rootReducer = {
    driverReducer,
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers(rootReducer),
    composeEnhancers(applyMiddleware(requestMiddleware)))

export default store