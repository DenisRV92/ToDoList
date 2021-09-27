
import {addMessageAC} from "../../../redux/reducerThuesday";
import {connect} from "react-redux";
import ToDoList from "../../ToDoList/ToDoList";
import {addCheckedAC, removeAllMessageAC, removeMessageAC, updateMessageAC} from "../../../redux/reducerThuesday";

let mapStateToProps=(state)=>{
debugger
    return{
        state:state.thuesday.message
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
const ThuesdayContainer=connect(mapStateToProps,mapDispatchToProps)(ToDoList)
export default ThuesdayContainer;