import React from 'react';
import cl from "./MyPosts.module.css"
import Post from "./Posts/Post";


const MyPosts = (props) => {
    let PostsDataArray = props.inputPosts.map(
        post => (
            <Post message={post.message} likesCount={post.likesCount}/>
        )
    );

    let textNewPost = React.createRef();
    let onAddPost= () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = textNewPost.current.value;
        props.upadateNewPostText(text);
    };


    return (<div className={cl.mainFrameMyPosts}>
            <div>
                <h3> My posts </h3>
                <div><h4> New post</h4></div>
            </div>
            <div>
                <h3> Current posts</h3>
                <div>
                    <textarea onChange={onPostChange} ref={textNewPost} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>

                <div className={cl.posts}>
                    {PostsDataArray}
                </div>

            </div>
        </div>

    );
}

export default MyPosts;