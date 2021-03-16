import React from 'react';
import cl from "./Dialog.module.css"
import UserMessageContainer from "./UserMessage/UserMessageContainer";
import UserDialogsContainer from "./UserDialogs/UserDialogsContainer";


const Dialogs = (props) => {
debugger
    return (
        <div>
            <div className={cl.mainDialogs}>
                <div className={cl.dialogsItem}>
                    <UserDialogsContainer store={props.store} />
                </div>
                <div className={cl.messagesItem}>
                    <UserMessageContainer store = {props.store} />
                </div>

            </div>

        </div>
    );
}
export default Dialogs;