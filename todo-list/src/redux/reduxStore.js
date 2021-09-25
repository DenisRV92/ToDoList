import {combineReducers, createStore} from "redux";
import reducerToDoList from "./reducerToDoList";

let reducers = combineReducers({
    doList: reducerToDoList,
})

let store = createStore(reducers)
window.store=store

export default store;