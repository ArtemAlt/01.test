import React from 'react';
import cl from "./profileInfo.module.css";
import Preloader from "../../common/Preloader";


const ProfileInfo = (props) => {
    if(!props.userProfile){
        return <Preloader/>
    }

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
                <div>
                    <h4>{props.userProfile.name}</h4>
                    <img className={cl.previewAvatar} src={props.userProfile.avaURL}/>
                    <h6> {props.userProfile.status}</h6>
                </div>
            </div>
        );



};

export default ProfileInfo;