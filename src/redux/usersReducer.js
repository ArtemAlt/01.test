const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING="TOGGLE_IS_FETCHING";
const initialState = {
    usersList: [],
    pageSize: 4,
    totalUsersCount:1,
    currentPage: 1,
    isFetching:false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state,isFetching: action.isFetching
            }
        case FOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    } else return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    } else return u;
                })
            }
        case SET_USERS:
            return {...state, usersList: [...action.usersList]};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS:
            return {...state,totalUsersCount: action.total}
        default:
            return state;
    }

}
export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (usersList) => ({type: SET_USERS, usersList});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, currentPage: page});
export const setTotalUsersCount = (total) => ({type: SET_TOTAL_USERS, total:total});
export const setIsFetching = (isFetching) =>({type:TOGGLE_IS_FETCHING,isFetching})
export default userReducer;
