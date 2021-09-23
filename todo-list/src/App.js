import './style/App.css';
import React from 'react'
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";

function App() {

    return (
        <div className='wrapper'>
            <Header/>
            <div className="content">
                <div className="content_item">
                    <Nav/>
                </div>
            </div>
        </div>
    );
}

export default App;
