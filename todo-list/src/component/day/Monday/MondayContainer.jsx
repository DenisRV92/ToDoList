

import {connect} from "react-redux";
import ToDoList from "../../ToDoList/ToDoList";
import {addCheckedAC, addMessageAC} from "../../../redux/reducerMonday";

let mapStateToProps=(state)=>{

    return{
       state:state.monday.message
    }
}
let mapDispatchToProps=(dispatch)=> {

    return {
        addNewMessage:(newMyPost)=>{
            dispatch(addMessageAC(newMyPost));
        },
        addNewCheked:(checked,id)=>{
            dispatch(addCheckedAC(checked,id));
        }

    }
}

const MondayContainer = connect(mapStateToProps,mapDispatchToProps)(ToDoList)
export default MondayContainer;