const ADD_NEW_POST = "ADD_NEW_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const initialState = {
    postsData: [
        {id: 1, message: "First Post", likesCount: 15},
        {id: 2, message: "second Post", likesCount: 7},
        {id: 3, message: "Third Post", likesCount: 11},
        {id: 4, message: "Forth Post", likesCount: 1},
        {id: 5, message: "Fifth Post", likesCount: 22}
    ],
    newPostText: "New text from stage",
    userProfile: null
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {...state, userProfile: action.userProfile}
        }
        case ADD_NEW_POST: {
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state}
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newTextPost;
            return stateCopy;
        }
        default:
            return state;
    }

}

export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const addNewPostActionCreator = () => ({type: ADD_NEW_POST});
export const updatePostTextActionCreator = (text) => {
    return {type: UPDATE_POST_TEXT, newTextPost: text}
};
export default profilePageReducer;
