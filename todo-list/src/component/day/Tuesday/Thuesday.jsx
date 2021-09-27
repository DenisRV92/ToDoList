import React, {useEffect, useState} from 'react';
import * as axios from "axios";
import ToDoList from "../../ToDoList/ToDoList";

const Thuesday = (props) => {

    useEffect(() => {
        const getTask = async () => {
            const res = await axios.get("https://raw.githubusercontent.com/YuryScript/interviewTestFakeApi/main/task.json")

            if(new Date().getDay()==2) {
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

export default Thuesday;