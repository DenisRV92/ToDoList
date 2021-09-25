import React from 'react';

import {connect} from "react-redux";
import ToDoList from "../../ToDoList/ToDoList";
import {addMessageAC} from "../../../redux/reducerMonday";

let mapStateToProps=(state)=>{
    debugger
    return{
       state:state.monday.message
    }
}
let mapDispatchToProps=(dispatch)=> {
    return {
        addNewMessage:(newMyPost)=>{
            dispatch(addMessageAC(newMyPost));
        }

    }
}
const MondayContainer = connect(mapStateToProps,mapDispatchToProps)(ToDoList)
export default MondayContainer;