import {addMessageAC} from "../../../redux/reducerSaturday";
import {connect} from "react-redux";
import ToDoList from "../../ToDoList/ToDoList";

let mapStateToProps=(state)=>{

    return{
        state:state.saturday.message
    }
}
let mapDispatchToProps=(dispatch)=> {
    return {
        addNewMessage:(newMyPost)=>{
            dispatch(addMessageAC(newMyPost));
        }

    }
}
const SaturdayContainer=connect(mapStateToProps,mapDispatchToProps)(ToDoList)
export default SaturdayContainer;