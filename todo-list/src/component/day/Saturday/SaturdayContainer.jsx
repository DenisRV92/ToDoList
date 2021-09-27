import {
    addCheckedAC,
    addMessageAC,
    removeAllMessageAC,
    removeMessageAC,
    updateMessageAC
} from "../../../redux/reducerSaturday";
import {connect} from "react-redux";
import ToDoList from "../../ToDoList/ToDoList";


let mapStateToProps=(state)=>{

    return{
        state:state.saturday.message
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
const SaturdayContainer=connect(mapStateToProps,mapDispatchToProps)(ToDoList)
export default SaturdayContainer;