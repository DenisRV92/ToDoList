
import {
    addCheckedAC,
    addMessageAC,
    removeAllMessageAC,
    removeMessageAC,
    updateMessageAC
} from "../../../redux/reducerFriday";
import {connect} from "react-redux";
import ToDoList from "../../ToDoList/ToDoList";


let mapStateToProps=(state)=>{
    debugger
    return{
        state:state.friday.message
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        addNewMessage: (newMyPost) => {
            dispatch(addMessageAC(newMyPost));
        },
        addNewCheked: (checked, id) => {
            dispatch(addCheckedAC(checked, id));
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
const FridayContainer=connect(mapStateToProps,mapDispatchToProps)(ToDoList)
export default FridayContainer;