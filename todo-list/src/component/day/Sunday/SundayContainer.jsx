import {
    addCompletedAC,
    addMessageSeverAC,
    addMessageAC,
    removeAllMessageAC,
    removeMessageAC,
    updateMessageAC
} from "../../../redux/reducerSunday";
import {connect} from "react-redux";
import Sunday from "./Sunday";


let mapStateToProps=(state)=>{

    return{
        state:state.sunday.message
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        addNewMessage: (newMyPost) => {
            dispatch(addMessageAC(newMyPost));
        },
        addNewCheked: (checked, id) => {
            dispatch(addCompletedAC(checked, id));
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
const SundayContainer=connect(mapStateToProps,mapDispatchToProps)(Sunday)

export default SundayContainer;