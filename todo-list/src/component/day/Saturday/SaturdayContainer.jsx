import {
    addCompletedAC,
    addMessageSeverAC,
    addMessageAC,
    removeAllMessageAC,
    removeMessageAC,
    updateMessageAC
} from "../../../redux/reducerSaturday";
import {connect} from "react-redux";
import Saturday from "./Saturday";



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
        },
        addNewMessageSever: (title, completed) => {
            dispatch(addMessageSeverAC(title, completed))
        }

    }
}
const SaturdayContainer=connect(mapStateToProps,mapDispatchToProps)(Saturday)
export default SaturdayContainer;