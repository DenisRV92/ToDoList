import {connect} from "react-redux";
import ToDoList from "../../ToDoList/ToDoList";
import {
    addCompletedAC,
    addMessageAC,
    removeAllMessageAC,
    removeMessageAC,
    updateMessageAC
} from "../../../redux/reducerThuesday";

let mapStateToProps = (state) => {

    return {
        state: state.thuesday.message
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
        removeNewAllMessage: () => {
            dispatch(removeAllMessageAC())
        }

    }
}
const ThuesdayContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList)
export default ThuesdayContainer;