import React from 'react';
import './topHeader.module.css'
import cl from './topHeader.module.css'

const TopHeader = () => {
    return <header className={cl.header_top}>
        <img className={cl.logo} src="https://img.icons8.com/ios-filled/2x/dot-logo.png" alt="logo"/>
    </header>;
};


export default TopHeader;