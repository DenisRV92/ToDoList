
// !!!
import {addMessageAC} from "../../../redux/reducerWednesday";
// !!!
import {connect} from "react-redux";
import ToDoList from "../../ToDoList/ToDoList";

let mapStateToProps=(state)=>{

    return{
        state:state.wednesday.message
    }
}
let mapDispatchToProps=(dispatch)=> {
    return {
        addNewMessage:(newMyPost)=>{
            dispatch(addMessageAC(newMyPost));
        }

    }
}
const WednesdayContainer=connect(mapStateToProps,mapDispatchToProps)(ToDoList)

export default WednesdayContainer;