import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { counterReducer } from "./counterReducer";

export const rootReducer = combineReducers({
    todoReducer,
    counterReducer
})