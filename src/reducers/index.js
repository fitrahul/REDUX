import { combineReducers } from "redux";
import { counter } from "./counter";
import { todo } from "./todo";

export const rootReducer = combineReducers({
    counter,
    todo
})
