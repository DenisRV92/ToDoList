import './style/App.css';
import React from 'react'
import Header from "./component/Header/Header";
import ToDoList from "./component/ToDoList/ToDoList";
// import NavContainer from "./component/Nav/NavContainer";
import Nav from "./component/Nav/Nav";
import NavContainer from "./component/Nav/NavContainer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MondayContainer from "./component/day/Monday/MondayContainer";



function App() {

    return (
        <BrowserRouter>
        <div className='wrapper'>
            <Header/>
            <div className="content">
                <div className="content_item">
                    <NavContainer/>
                    <Switch>
                        <Route path="/monday" component={MondayContainer}></Route>
                        {/*<Route path="/tuesday" component={ToDoListContainer}></Route>*/}
                        {/*<Route path="/wednesday" component={ToDoListContainer}></Route>*/}
                        {/*<Route path="/thursday" component={ToDoListContainer}></Route>*/}
                        {/*<Route path="/friday" component={ToDoListContainer}></Route>*/}
                        {/*<Route path="/saturday" component={ToDoListContainer}></Route>*/}
                        {/*<Route path="/sunday" component={ToDoListContainer}></Route>*/}
                    </Switch>
                    {/*<ToDoList/>*/}
                </div>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
