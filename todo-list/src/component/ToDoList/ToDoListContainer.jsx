import React from 'react';
import './ToDoList.module.css'
import {connect} from "react-redux";
import ToDoList from "./ToDoList";
import {addMessageAC} from "../../redux/reducerToDoList";


let mapStateToProps=(state)=>{

    return{
        monday:state.doList.monday,
        tuesday:state.doList.tuesday,
        wednesday:state.doList.wednesday,
        thursday:state.doList.thursday,
        friday:state.doList.friday,
        saturday:state.doList.saturday,
        sunday:state.doList.sunday
    }
}
let mapDispatchToProps=(dispatch)=> {
    return {
        addNewMessage:(newMyPost)=>{
            dispatch(addMessageAC(newMyPost));
        }

    }
}
const ToDoListContainer=connect(mapStateToProps,mapDispatchToProps)(ToDoList)
export default ToDoListContainer;