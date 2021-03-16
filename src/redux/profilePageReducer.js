const ADD_NEW_POST = "ADD_NEW_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
let initialState ={
    profilePage: {
        postsData: [
            {id: 1, message: "First Post", likesCount: 15},
            {id: 2, message: "second Post", likesCount: 7},
            {id: 3, message: "Third Post", likesCount: 11},
            {id: 4, message: "Forth Post", likesCount: 1},
            {id: 5, message: "Fifth Post", likesCount: 22}
        ],
        newPostText: "New text from stage"
    }
};

const profilePageReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: 6,
                message: state.profilePage.newPostText,
                likesCount: 0
            };
            state.profilePage.postsData.push(newPost);
            state.profilePage.newPostText = "";
            return state;
        case UPDATE_POST_TEXT:
            state.profilePage.newPostText = action.newTextPost;
            return state;
        default:
            return state;
    }

}
export const addNewPostActionCreator = () => ({type: ADD_NEW_POST});

export const updatePostTextActionCreator = (text) => {
    return {type: UPDATE_POST_TEXT, newTextPost: text}
};
export default profilePageReducer;
