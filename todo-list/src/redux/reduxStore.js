import {combineReducers, createStore} from "redux";
import reducerToDoList from "./reducerToDoList";
import reducerMonday from "./reducerMonday";
import reducerNav from "./reducerNav";

let reducers = combineReducers({
    nav: reducerNav,
    monday: reducerMonday,
})

let store = createStore(reducers)
window.store = store

export default store;