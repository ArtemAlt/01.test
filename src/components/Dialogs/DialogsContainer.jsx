import React from 'react';
import cl from "./Dialog.module.css"
import UserMessageContainer from "./UserMessage/UserMessageContainer";
import UserDialogsContainer from "./UserDialogs/UserDialogsContainer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    debugger
    return (
        <div>
            <Dialogs store={props.store}/>
        </div>
    );
}
export default DialogsContainer;