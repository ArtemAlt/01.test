import React from 'react';
import cl from "./profileInfo.module.css";


const ProfileInfo = (props) => {
    return (
        <div className={cl.mainFrameProfileInfo}>
            <div className={cl.bigImage}>
                <img src="https://atlant777.ru/wp-content/uploads/2018/07/1160x-artskinali-200.656-1000x200.jpg"
                     alt="mainPicture"/>
            </div>
            <div>
                <img src="https://img.icons8.com/wired/2x/duolingo-logo.png" alt="logo"/>
                description
            </div>
        </div>
    );

};

export default ProfileInfo;