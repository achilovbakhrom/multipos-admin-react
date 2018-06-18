
import {
    signInReducer, signUpReducer, commonReducer
} from "../reducers/index";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(combineReducers({
    signInReducer, signUpReducer, commonReducer
}), applyMiddleware(thunk, logger));

export default store;

