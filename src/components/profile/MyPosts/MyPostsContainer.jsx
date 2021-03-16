
import {addNewPostActionCreator, updatePostTextActionCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";




const MyPostsContainer = (props) => {
    debugger
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addNewPostActionCreator());
    }
    let  onPostChange = (text)=>{
        let action = updatePostTextActionCreator(text);
        props.store.dispatch(action);
    };
return ( <MyPosts upadateNewPostText={onPostChange}
                  addPost={addPost}
                  inputPosts={state.profilePage.profilePage.postsData}
                  newPostText = {state.profilePage.profilePage.newPostText}/>);
}

export default MyPostsContainer;