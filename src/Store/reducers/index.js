import { combineReducers } from "redux";
import worksListReducer from "./worksListReducer";
import workPageReducer from "./workPageReducer";

export const rootReducer = combineReducers({
    worksList: worksListReducer,
    workPage: workPageReducer
})