import './style/App.css';
import React from 'react'
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import {useEffect, useState} from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import Question from "./component/Question/Question";

function App() {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(
            () => setValue(new Date()),
            1000
        );

        return () => {
            clearInterval(interval);
        }
    }, []);
    return (
        <div className='wrapper'>
            <Header/>
            <div className="content">
                <div className="content_item">
                    <Nav/>
                    <Clock value={value}/>
                    <Question/>
                </div>
            </div>
        </div>
    );
}

export default App;
