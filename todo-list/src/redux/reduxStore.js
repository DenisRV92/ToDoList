import {combineReducers, createStore} from "redux";
import reducerMonday from "./reducerMonday";
import reducerNav from "./reducerNav";
import reducerTuesday from "./reducerThuesday";
import ReducerWednesday from "./reducerWednesday";
import reducerThursday from "./reducerThursday";
import reducerFriday from "./reducerFriday";
import reducerSaturday from "./reducerSaturday";
import reducerSunday from "./reducerSunday";

let reducers = combineReducers({
    nav: reducerNav,
    monday: reducerMonday,
    thuesday:reducerTuesday,
    wednesday:ReducerWednesday,
    thursday:reducerThursday,
    friday:reducerFriday,
    saturday:reducerSaturday,
    sunday:reducerSunday
})

let store = createStore(reducers)
window.store = store

export default store;