
import UserDialogs from "./UserDialogs";


const UserDialogContainer = (props) => {
    let state = props.store.getState();
    return (
        <div>
            <UserDialogs userDialog ={state.messagesPage.messagesPage.dialogData} />
        </div>

    );
};


export default UserDialogContainer;