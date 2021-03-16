import './App.css';
import TopHeader from "./components/topHeader/topHeader";
import LeftNavigation from "./components/NavBar/LeftNavigation";
import Profile from "./components/profile/profile";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    debugger
    return (
        <div className="main-container">
            <div className="appWrapper">
                <TopHeader/>
                <LeftNavigation/>
                <div className="appWrapperMainFrame">
                    <Route path="/Dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path="/Profile" render={() => <Profile store={props.store}/>}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>
                    <Route path="/News" render={() => <News/>}/>
                </div>
            </div>
        </div>
    );
};
export default App;
