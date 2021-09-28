import React, {useEffect} from 'react';
import * as axios from "axios";
import ToDoList from "../../ToDoList/ToDoList";

const Sunday = (props) => {
    useEffect(() => {
        const getTask = async () => {
            if (new Date().getDay() === 7 && props.state.length === 0) {
                const res = await axios.get("https://raw.githubusercontent.com/YuryScript/interviewTestFakeApi/main/task.json")
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
export default Sunday;