import './style/App.css';
import React from 'react'
import Header from "./component/Header/Header";
import NavContainer from "./component/Nav/NavContainer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MondayContainer from "./component/day/Monday/MondayContainer";
import ThuesdayContainer from "./component/day/Tuesday/ThuesdayContainer";
import WednesdayContainer from "./component/day/Wednesday/WednesdayContainer";
import ThursdayContainer from "./component/day/Thursday/ThursdayContainer";
import FridayContainer from "./component/day/Friday/FridayContainer";
import SaturdayContainer from "./component/day/Saturday/SaturdayContainer";
import SundayContainer from "./component/day/Sunday/SundayContainer";
import Monday from "./component/day/Monday/Monday";



function App() {

    return (
        <BrowserRouter>
        <div className='wrapper'>
            <Header/>
            <div className="content">
                <div className="content_item">
                    {/*<Header/>*/}
                    <NavContainer/>
                    <Switch>
                        <Route path="/monday" component={MondayContainer}></Route>
                        <Route path="/tuesday" component={ThuesdayContainer}></Route>
                        <Route path="/wednesday" component={WednesdayContainer}></Route>
                        <Route path="/thursday" component={ThursdayContainer}></Route>
                        <Route path="/friday" component={FridayContainer}></Route>
                        <Route path="/saturday" component={SaturdayContainer}></Route>
                        <Route path="/sunday" component={SundayContainer}></Route>
                    </Switch>
                    {/*<ToDoList/>*/}
                </div>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
