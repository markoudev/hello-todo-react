import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import logger from "redux-logger"; // This shows actions being dispatched in the debugger, including previous/next state
import thunk from "redux-thunk"; // Thunk allows us to dispatch asynchronous actions
import { AnyAppActionWithThunk } from "./actions";
import todoSlice from "./reducers/todos";
import userSlice from "./reducers/user";

/**
 * Creates the store. State itself is nothing more than just an object that
 * holds some keys and values. We combine several reducers because we want to
 * organize our state a little bit. Redux will also make sure that each reducer
 * will only be provided with its own state that should change or not, based on
 * an action it receives.
 */
const store = createStore(
  combineReducers({
    todos: todoSlice,
    user: userSlice
  }),
  applyMiddleware(logger, thunk)
)

// Export typed versions of useDispatch and useSelector. Using these versions
// instead of the generic ones makes that we get code checking at compile
// time to avoid accessing parts of state that don't turn out to exist, and
// also gives us auto-completion.
export type AnyAppActionDispatch = Dispatch<AnyAppActionWithThunk>;
export const useAppDispatch = () => useDispatch<AnyAppActionDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
