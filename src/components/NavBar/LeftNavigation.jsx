import React from 'react';
import cl from './LeftNavigation.module.css';
import {NavLink} from "react-router-dom";

const LeftNavigation = () => {
    return (
        <nav className={cl.nav}>
            <div className={cl.mainFrame}>
                <div className={`${cl.item} ${cl.active}`}>
                    <NavLink  to="/Profile" activeClassName={cl.active} >Profile</NavLink>
                </div>
                <div className={cl.item}>
                    <NavLink to="/Dialogs" activeClassName={cl.active}>Messages</NavLink>
                </div>
                <div className={cl.item}>
                    <NavLink to="/News" activeClassName={cl.active}>News</NavLink>
                </div>
                <div className={cl.item}>
                    <NavLink to="/Music" activeClassName={cl.active} >Music</NavLink>
                </div>
                <div className={cl.item}>
                    <NavLink to="/Settings" activeClassName={cl.active}>Settings</NavLink>
                </div>
            </div>

        </nav>

    )
};
export default LeftNavigation;