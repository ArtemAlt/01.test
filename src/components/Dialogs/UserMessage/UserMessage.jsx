
import cl from "./UserMessage.module.css"


const UserMessage = (props) => {
    let MessageDataArray = props.messageData.map(msg => (<div> {msg.message}</div>))
    let newMessageBody = props.newMessageText;
    let onSendMessageClick = ()=>{
        props.onSendMessageClick ();
    };
    let onNewMessageChange = (e)=>{
        let body = e.target.value;
        props.onNewMessageChange(body);

    };
    return (
        <div>
            <div className={cl.userMessage}>
                <div>
                    {MessageDataArray}
                </div>
                <div>
                    <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="New message"> </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>New message</button>
                </div>



            </div>
        </div>
    );
};


export default UserMessage;