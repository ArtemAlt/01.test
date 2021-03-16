import React from 'react';
import cl from "./UserDialogs.module.css"
import {NavLink} from "react-router-dom";


const UserDialog = (props) => {
    let DialogDataArray = props.userDialog.map(
        d=><div className={cl.userDialog}><NavLink className={cl.dialogName} to={`/Dialogs/${d.id}`}>{d.name}</NavLink> </div>);


    return (
        <div>
            <div >
                {DialogDataArray}
            </div>
        </div>

    );
};







export default UserDialog;