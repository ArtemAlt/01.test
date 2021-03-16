import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/reduxStore"



let rerenderFullApp = (state)=>{
    debugger
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                    dispatch = {store.dispatch.bind(store)}
                store = {store}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderFullApp(store.getState());
store.subscribe(()=>{
 let state = store.getState();
 rerenderFullApp(state);
}

);
reportWebVitals();
