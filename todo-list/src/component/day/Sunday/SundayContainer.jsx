import {addMessageAC} from "../../../redux/reducerSunday";
import {connect} from "react-redux";
import ToDoList from "../../ToDoList/ToDoList";

let mapStateToProps=(state)=>{

    return{
        state:state.sunday.message
    }
}
let mapDispatchToProps=(dispatch)=> {
    return {
        addNewMessage:(newMyPost)=>{
            dispatch(addMessageAC(newMyPost));
        }

    }
}
const SundayContainer=connect(mapStateToProps,mapDispatchToProps)(ToDoList)

export default SundayContainer;