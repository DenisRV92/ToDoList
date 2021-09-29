import './style/App.css';
import React from 'react'
import Header from "./component/Header/Header";
import NavContainer from "./component/Nav/NavContainer";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import MondayContainer from "./component/day/Monday/MondayContainer";
import ThuesdayContainer from "./component/day/Tuesday/ThuesdayContainer";
import WednesdayContainer from "./component/day/Wednesday/WednesdayContainer";
import ThursdayContainer from "./component/day/Thursday/ThursdayContainer";
import FridayContainer from "./component/day/Friday/FridayContainer";
import SaturdayContainer from "./component/day/Saturday/SaturdayContainer";
import SundayContainer from "./component/day/Sunday/SundayContainer";


class App extends React.Component {
    render() {

        return (
            <BrowserRouter>
                <div className='wrapper'>
                    <Header/>
                    <NavContainer/>
                    <Switch>
                        <Route exact path='/'>
                            {(new Date().getDay() === 1) && (
                                <Redirect to='/monday'/>
                            )}
                            {(new Date().getDay() === 2) && (
                                <Redirect to='/tuesday'/>
                            )}
                            {(new Date().getDay() === 3) && (
                                <Redirect to='/wednesday'/>
                            )}
                            {(new Date().getDay() === 4) && (
                                <Redirect to='/thursday'/>
                            )}
                            {(new Date().getDay() === 5) && (
                                <Redirect to='/friday'/>
                            )}
                            {(new Date().getDay() === 6) && (
                                <Redirect to='/saturday'/>
                            )}
                            {(new Date().getDay() === 7) && (
                                <Redirect to='/sunday'/>
                            )}
                        </Route>
                        <Route path="/monday" component={MondayContainer}></Route>
                        <Route path="/tuesday" component={ThuesdayContainer}></Route>
                        <Route path="/wednesday" component={WednesdayContainer}></Route>
                        <Route path="/thursday" component={ThursdayContainer}></Route>
                        <Route path="/friday" component={FridayContainer}></Route>
                        <Route path="/saturday" component={SaturdayContainer}></Route>
                        <Route path="/sunday" component={SundayContainer}></Route>

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
