import React from 'react';
import './profile.module.css'
import ProfileInfo from "./ProfileInfo/profileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo userProfile={props.userProfile}/>
            <MyPostsContainer/>

        </div>
    )
};

export default Profile;