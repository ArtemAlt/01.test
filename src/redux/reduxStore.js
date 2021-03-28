import {combineReducers, createStore} from "redux";
import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";
import userReducer from "./usersReducer";
const reducers = combineReducers(
    {
        messagesPage: messagePageReducer,
        profilePage:profilePageReducer,
        usersPage:userReducer
    }
);


const store = createStore(reducers);

window.store=store;
export default store;