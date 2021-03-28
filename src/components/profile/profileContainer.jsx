import React from 'react';
import Profile from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profilePageReducer";
import {withRouter} from "react-router";

class profileContainer extends React.Component {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if (!userId){
            userId=1;
        }
        axios.get(`http://localhost:8081/network/api/v1/profile/`+userId)
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

let UrlDataContainerComponent = withRouter(profileContainer);


export default connect(mapStateToProps,{setUserProfile})(UrlDataContainerComponent);