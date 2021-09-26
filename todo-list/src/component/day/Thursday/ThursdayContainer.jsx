
// !!!
import {addMessageAC} from "../../../redux/reducerThursday";
// !!!
import {connect} from "react-redux";
import ToDoList from "../../ToDoList/ToDoList";

let mapStateToProps=(state)=>{

    return{
        state:state.thursday.message
    }
}
let mapDispatchToProps=(dispatch)=> {
    return {
        addNewMessage:(newMyPost)=>{
            dispatch(addMessageAC(newMyPost));
        }

    }
}
const ThursdayContainer=connect(mapStateToProps,mapDispatchToProps)(ToDoList)
export default ThursdayContainer;