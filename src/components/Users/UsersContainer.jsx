import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader";

let mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.usersList,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`http://localhost:8081/network/api/v1/users?page=${this.props.currentPage}&size=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.content);
                this.props.setTotalUsersCount(response.data.totalElements);

            })
    }

    onPageChange = (p) => {
        this.props.setCurrentPage(p);
        this.props.setIsFetching(true);
        axios.get(`http://localhost:8081/network/api/v1/users?page=${p}&size=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setIsFetching(false);
                    this.props.setUsers(response.data.content);

                })

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   usersList={this.props.usersList}
                   onPageChange={this.onPageChange}
                   followAction={this.props.followAction}
                   unfollowedAction={this.props.unfollowedAction}/>
        </>
    }
}

export default connect(mapStateToProps, {setIsFetching,follow,unFollow,setUsers,setCurrentPage,setTotalUsersCount})(UsersAPIComponent);



