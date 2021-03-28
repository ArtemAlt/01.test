import {addNewPostActionCreator, updatePostTextActionCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps=(state)=>{
    return{
        inputPosts:state.profilePage.postsData,
        newPostText:state.profilePage.newPostText
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        upadateNewPostText:(text)=>{
            let action = updatePostTextActionCreator(text);
           dispatch(action);
        },
        addPost:()=>{
            dispatch(addNewPostActionCreator());
        }
    }
}

let MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;