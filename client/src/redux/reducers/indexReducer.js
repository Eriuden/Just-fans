import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import usersReducer from "./allUserReducer";
import errorReducer from "./errorsReducer";
import fanReducer from "./fanReducer";
import allFansReducer from "./allFansReducer";

export const reducers = combineReducers({
    userReducer,
    usersReducer,
    errorReducer,
    fanReducer,
    allFansReducer
})