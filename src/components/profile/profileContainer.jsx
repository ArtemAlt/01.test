import React from 'react';
import Profile from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profilePageReducer";

class profileContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:8081/network/api/v1/profile/2`)
            .then(response => {
                debugger
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} userProfile={this.props.userProfile}/>
            </div>
        )
    }
}
let mapStateToProps=(state) =>({
    userProfile: state.profilePage.userProfile
})

export default connect(mapStateToProps,{setUserProfile})(profileContainer);