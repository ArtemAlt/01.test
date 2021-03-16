const UPDATE_MSG_TEXT = "UPDATE_MSG_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";
let initialState={
    messagesPage: {
        messageData: [
            {id: 1, message: "First Message"},
            {id: 2, message: "Second Message"},
            {id: 3, message: "Third Message"},
            {id: 4, message: "Forth Message"},
            {id: 5, message: "Fifth Message"}
        ],
        dialogData: [
            {id: 1, name: "Vaslya"},
            {id: 2, name: "Ilya"},
            {id: 3, name: "Dima"},
            {id: 4, name: "Sveta"},
            {id: 5, name: "Artem"}
        ],
        newMessageText: ""

    }
};


const messagePageReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_MSG_TEXT:
            state.messagesPage.newMessageText = action.newMessageText;
            return state;
        case SEND_MESSAGE:
            let newMSGText = state.messagesPage.newMessageText;
            state.messagesPage.newMessageText = "";
            state.messagesPage.messageData.push({id: 6, message: newMSGText});
            return state;
        default:
            return state;
    }
}
export const sendMessageActionCreator = () => {
    return {type: SEND_MESSAGE}
};
export const updateMessageTextActionCreator = (text) => {
    return {type: UPDATE_MSG_TEXT, newMessageText: text}
};
export default messagePageReducer;
