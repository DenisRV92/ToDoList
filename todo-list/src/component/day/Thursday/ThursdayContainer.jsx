
// !!!
import {
    addCheckedAC,
    addMessageAC,
    removeAllMessageAC,
    removeMessageAC,
    updateMessageAC
} from "../../../redux/reducerThursday";
// !!!
import {connect} from "react-redux";
import ToDoList from "../../ToDoList/ToDoList";
// import {addCheckedAC, removeAllMessageAC, removeMessageAC, updateMessageAC} from "../../../redux/reducerMonday";

let mapStateToProps=(state)=>{

    return{
        state:state.thursday.message
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
const ThursdayContainer=connect(mapStateToProps,mapDispatchToProps)(ToDoList)
export default ThursdayContainer;