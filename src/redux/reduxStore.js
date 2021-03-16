import {combineReducers, createStore} from "redux";
import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";
let reducers = combineReducers(
    {
        messagesPage: messagePageReducer,
        profilePage:profilePageReducer
    }
);
let store = createStore(reducers);




export default store;