const ADD_MESSAGE_SATURDAY= 'ADD_MESSAGE_SATURDAY';
const ADD_CHECKED_SATURDAY= 'ADD_CHECKED_SATURDAY';
const UPDATE_MESSAGE_SATURDAY= 'UPDATE_MESSAGE_SATURDAY';
const REMOVE_MESSAGE_SATURDAY= 'REMOVE_MESSAGE_SATURDAY';
const REMOVE_ALL_MESSAGE_SATURDAY= 'REMOVE_ALL_MESSAGE_SATURDAY';
let initialState = {
    message: [],
}
const reducerSaturday = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE_SATURDAY:
            return {
                ...state,
                message: [...state.message, {
                    id: state.message.length + 1,
                    title: action.newMessage,
                    checked: false
                }]
            }
        case ADD_CHECKED_SATURDAY:
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, checked: action.checked}
                    }
                    return v
                })
            }
        case UPDATE_MESSAGE_SATURDAY:
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, title: action.updateMessage}
                    }
                    return v
                })
            }
        case REMOVE_MESSAGE_SATURDAY:
            return {
                ...state,
                message: state.message.filter(v => {
                    if (v.id !== action.id) {
                        return {...v}
                    }

                })
            }
        case REMOVE_ALL_MESSAGE_SATURDAY:
            return {
                ...state,
                message: []
            }
        default:
            return state
    }

};
export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE_SATURDAY, newMessage})
export const addCheckedAC = (checked, id) => ({type: ADD_CHECKED_SATURDAY, checked, id})
export const updateMessageAC = (updateMessage, id) => ({type: UPDATE_MESSAGE_SATURDAY, updateMessage, id})
export const removeMessageAC = (id) => ({type: REMOVE_MESSAGE_SATURDAY, id})
export const removeAllMessageAC = () => ({type: REMOVE_ALL_MESSAGE_SATURDAY})


export default reducerSaturday;