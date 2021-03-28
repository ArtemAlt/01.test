import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/messagePageReducer";
import UserMessage from "./UserMessage";
import {connect} from "react-redux";



let mapStateToProps =(state)=>{
   return{
       messageData:state.messagesPage.messageData,
       newMessageText:state.messagesPage.newMessageText
   }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        onSendMessageClick:()=>{dispatch(sendMessageActionCreator())},
        onNewMessageChange:(body)=>{
            dispatch(updateMessageTextActionCreator(body))
        }
    }
}

let UserMessageContainer = connect(mapStateToProps,mapDispatchToProps)(UserMessage);

export default UserMessageContainer;