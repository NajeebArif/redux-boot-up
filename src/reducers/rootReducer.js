import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { counterReducer } from "./counterReducer";
import visibilityFilter from "./visibilityFilter";

export const rootReducer = combineReducers({
    todoReducer,
    counterReducer,
    filters: visibilityFilter
})