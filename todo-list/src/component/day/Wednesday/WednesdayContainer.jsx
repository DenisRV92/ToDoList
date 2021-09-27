
// !!!
import {
    addCompletedAC,
    addMessageAC,
    removeAllMessageAC,
    removeMessageAC,
    updateMessageAC
} from "../../../redux/reducerWednesday";
// !!!
import {connect} from "react-redux";
import ToDoList from "../../ToDoList/ToDoList";
// import {addCompletedAC, removeAllMessageAC, removeMessageAC, updateMessageAC} from "../../../redux/reducerWednesday";

let mapStateToProps=(state)=>{

    return{
        state:state.wednesday.message
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        addNewMessage: (newMyPost) => {
            dispatch(addMessageAC(newMyPost));
        },
        addNewCheked: (completed, id) => {
            dispatch(addCompletedAC(completed, id));
        },
        updateNewMessage: (updateMessage, id) => {
            dispatch(updateMessageAC(updateMessage, id))
        },
        removeNewMessage: (id) => {
            dispatch(removeMessageAC(id))
        },
        removeNewAllMessage:()=>{
            dispatch(removeAllMessageAC())
        }

    }
}
const WednesdayContainer=connect(mapStateToProps,mapDispatchToProps)(ToDoList)

export default WednesdayContainer;