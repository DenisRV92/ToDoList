import React from 'react';
import './ToDoList.module.css'
import {connect} from "react-redux";
import ToDoList from "./ToDoList";

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
const ToDoListContainer=connect(mapStateToProps)(ToDoList)
export default ToDoListContainer;