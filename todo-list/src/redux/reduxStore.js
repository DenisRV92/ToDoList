import {combineReducers, createStore} from "redux";
import reducerToDoList from "./reducerToDoList";

let reducer = combineReducers({
    doList: reducerToDoList,
})
let store = createStore(reducer)
// window.store=store
// debugger
console.log(store)
export default store;