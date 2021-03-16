import React from 'react';
import cl from "./Post.module.css"

const Post = (props) => {
    return (
        <div>
            <div className={cl.userPost}>
                <div><img className={cl.previewAva} src="https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg"
                          alt="previewAva"/>
                </div>
                <div className={cl.userPostText}>
                    <p> {props.message} </p>
                </div>
                <div className={cl.userPostLikes}>
                    <p> Like: {props.likesCount}</p>
                </div>
            </div>
        </div>
    );
}
export default Post;