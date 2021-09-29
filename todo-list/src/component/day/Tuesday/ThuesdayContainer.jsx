import {connect} from "react-redux";
// !!!
import {
    addCompletedAC, addMessageSeverAC,
    addMessageAC,
    removeAllMessageAC,
    removeMessageAC,
    updateMessageAC
} from "../../../redux/reducerThuesday";
// !!!
import Thuesday from "./Thuesday";


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
        },
        addNewMessageSever: (title, completed) => {
            dispatch(addMessageSeverAC(title, completed))
        }

    }
}
const ThuesdayContainer = connect(mapStateToProps, mapDispatchToProps)(Thuesday)
export default ThuesdayContainer;