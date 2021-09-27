import React, {useEffect, useState} from 'react';
import MondayContainer from "./MondayContainer";
import ToDoList from "../../ToDoList/ToDoList";
import * as axios from "axios";

const Monday = (props) => {
    useEffect(() => {
        const getTask = async () => {
            const res = await axios.get("https://raw.githubusercontent.com/YuryScript/interviewTestFakeApi/main/task.json")
            console.log(props.state)
            if (new Date().getDay() == 1 && props.state.length === 0) {
                res.data.map((v) => props.addNewMessageSever(v.title, v.completed))
            }

        }
        getTask()
    }, []);
    
    return (
        <div>
            <ToDoList state={props.state}
                      addNewMessage={props.addNewMessage}
                      addNewCheked={props.addNewCheked}
                      updateNewMessage={props.updateNewMessage}
                      removeNewMessage={props.removeNewMessage}
                      removeNewAllMessage={props.removeNewAllMessage}
            />
        </div>
    );
};

export default Monday;