
// !!!
import {
    addCompletedAC,
    addMessageSeverAC,
    addMessageAC,
    removeAllMessageAC,
    removeMessageAC,
    updateMessageAC
} from "../../../redux/reducerThursday";
// !!!
import {connect} from "react-redux";
import Thursday from './Thursday'




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
const ThursdayContainer=connect(mapStateToProps,mapDispatchToProps)(Thursday)
export default ThursdayContainer;