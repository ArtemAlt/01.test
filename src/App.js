import './App.css';
import TopHeader from "./components/topHeader/topHeader";
import LeftNavigation from "./components/NavBar/LeftNavigation";
import Profile from "./components/profile/profile";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Dialogs from "./components/Dialogs/Dialogs";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/profileContainer";

const App = () => {
    return (
        <div className="main-container">
            <div className="appWrapper">
                <TopHeader/>
                <LeftNavigation/>
                <div className="appWrapperMainFrame">
                    <Route path="/dialogs"
                           render={() => <Dialogs/>}/>
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer />}/>
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/music"
                           render={() => <Music/>}/>
                    <Route path="/settings"
                           render={() => <Settings/>}/>
                    <Route path="/news"
                           render={() => <News/>}/>
                </div>
            </div>
        </div>
    );
};
export default App;
