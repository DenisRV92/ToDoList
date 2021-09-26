
import {addMessageAC} from "../../../redux/reducerThuesday";
import {connect} from "react-redux";
import ToDoList from "../../ToDoList/ToDoList";

let mapStateToProps=(state)=>{
debugger
    return{
        state:state.thuesday.message
    }
}
let mapDispatchToProps=(dispatch)=> {
    return {
        addNewMessage:(newMyPost)=>{
            dispatch(addMessageAC(newMyPost));
        }

    }
}
const ThuesdayContainer=connect(mapStateToProps,mapDispatchToProps)(ToDoList)
export default ThuesdayContainer;