
// !!!
import {
    addCompletedAC,
    addMessageSeverAC,
    addMessageAC,
    removeAllMessageAC,
    removeMessageAC,
    updateMessageAC
} from "../../../redux/reducerWednesday";
// !!!
import {connect} from "react-redux";
import Wednesday from "./Wednesday";



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
        },
        addNewMessageSever: (title, completed) => {
            dispatch(addMessageSeverAC(title, completed))
        }

    }
}
const WednesdayContainer=connect(mapStateToProps,mapDispatchToProps)(Wednesday)

export default WednesdayContainer;