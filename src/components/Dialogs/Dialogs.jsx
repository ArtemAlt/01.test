import React from 'react';
import cl from "./Dialog.module.css"
import UserMessageContainer from "./UserMessage/UserMessageContainer";
import UserDialogsContainer from "./UserDialogs/UserDialogsContainer";


const Dialogs = () => {
    return (
        <div>
            <div className={cl.mainDialogs}>
                <div className={cl.dialogsItem}>
                    <UserDialogsContainer />
                </div>
                <div className={cl.messagesItem}>
                    <UserMessageContainer />
                </div>

            </div>

        </div>
    );
}
export default Dialogs;