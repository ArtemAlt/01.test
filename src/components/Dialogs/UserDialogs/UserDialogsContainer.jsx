import UserDialogs from "./UserDialogs";
import {connect} from "react-redux";


let mapStateToProps=(state)=>{
    return{
        userDialog:state.messagesPage.dialogData

    }
}
let mapDispatchToProps=(dispatch)=>{
    return{    }
}

let UserDialogContainer = connect(mapStateToProps,mapDispatchToProps)(UserDialogs);


export default UserDialogContainer;