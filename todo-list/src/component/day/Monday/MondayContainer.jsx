import {connect} from "react-redux";
import {
    addCompletedAC,
    addMessageAC, addMessageSeverAC,
    removeAllMessageAC,
    removeMessageAC,
    updateMessageAC
} from "../../../redux/reducerMonday";
import React from "react";
import Monday from "./Monday";

let mapStateToProps = (state) => {

    return {
        state: state.monday.message,


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
const MondayContainer = connect(mapStateToProps, mapDispatchToProps)(Monday)
export default MondayContainer;