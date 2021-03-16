import React from 'react';
import cl from "./UserMessage.module.css"
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/messagePageReducer";
import UserDialogs from "../UserDialogs/UserDialogs";
import UserMessage from "./UserMessage";


const UserMessageContainer = (props) => {
    let state = props.store.getState();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    };
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateMessageTextActionCreator(body));

    };
    return (
        <div>
            <UserMessage messageData = {state.messagesPage.messagesPage.messageData}
                         newMessageText={state.messagesPage.messagesPage.newMessageText}
                         onSendMessageClick={onSendMessageClick}
                         onNewMessageChange={onNewMessageChange}/>


        </div>
    );
};


export default UserMessageContainer;