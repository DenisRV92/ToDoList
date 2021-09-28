// !!!
import {
    addCompletedAC,
    addMessageSeverAC,
    addMessageAC,
    removeAllMessageAC,
    removeMessageAC,
    updateMessageAC
} from "../../../redux/reducerFriday";
// !!!
import {connect} from "react-redux";
import Friday from "./Friday";



let mapStateToProps=(state)=>{

    return{
        state:state.friday.message
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
        addNewMessageSever:(title, completed) => {
            dispatch(addMessageSeverAC(title, completed))
        }

    }
}
const FridayContainer=connect(mapStateToProps,mapDispatchToProps)(Friday)
export default FridayContainer;