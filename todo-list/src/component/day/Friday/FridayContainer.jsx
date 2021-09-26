
import {addMessageAC} from "../../../redux/reducerFriday";
import {connect} from "react-redux";
import ToDoList from "../../ToDoList/ToDoList";

let mapStateToProps=(state)=>{
    debugger
    return{
        state:state.friday.message
    }
}
let mapDispatchToProps=(dispatch)=> {
    return {
        addNewMessage:(newMyPost)=>{
            dispatch(addMessageAC(newMyPost));
        }

    }
}
const FridayContainer=connect(mapStateToProps,mapDispatchToProps)(ToDoList)
export default FridayContainer;