import {combineReducers, createStore} from "redux";
import reducerToDoList from "./reducerToDoList";
import reducerMonday from "./reducerMonday";
import reducerNav from "./reducerNav";
import reducerTuesday from "./reducerThuesday";
import ReducerWednesday from "./reducerWednesday";
import reducerThursday from "./reducerThursday";
import reducerFriday from "./reducerFriday";
import reducerSaturday from "./reducerSaturday";
import reducerSanday from "./reducerSunday";

let reducers = combineReducers({
    nav: reducerNav,
    monday: reducerMonday,
    thuesday:reducerTuesday,
    wednesday:ReducerWednesday,
    thursday:reducerThursday,
    friday:reducerFriday,
    saturday:reducerSaturday,
    sunday:reducerSanday
})

let store = createStore(reducers)
window.store = store

export default store;