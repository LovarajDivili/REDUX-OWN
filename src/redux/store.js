import { combineReducers, createStore, applyMiddleware,compose } from "redux";
import mobileReducer from "./reducers/mobileReducer";
import laptopReducer from "./reducers/laptopReducer";
import usersReducer from "./reducers/usersReducer";
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const rootReducer = combineReducers({
    laptops : laptopReducer,
    mobiles : mobileReducer,
    users :   usersReducer
})


const store = createStore(rootReducer,compose(
applyMiddleware(thunk,logger),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
));

export default store;

// using fetch are api data we yuse thunk middleware functionalitys
// logger is used to console data in inspections. compose used to join redux tools function
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// after rootreducer we use applymiddleware complsary.


