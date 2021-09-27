const ADD_MESSAGE_MONDAY = 'ADD_MESSAGE_MONDAY';
const ADD_COMPLETED_MONDAY = 'ADD_CHECKED_MONDAY';
const UPDATE_MESSAGE_MONDAY = 'UPDATE_MESSAGE_MONDAY';
const REMOVE_MESSAGE_MONDAY = 'REMOVE_MESSAGE_MONDAY';
const REMOVE_ALL_MESSAGE_MONDAY = 'REMOVE_ALL_MESSAGE_MONDAY';
const ADD_MESSAGE_SERVER_MONDAY = 'ADD_MESSAGE_SERVER_MONDAY';
let initialState = {
    message: [],
}
const reducerMonday = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE_MONDAY:
            return {
                ...state,
                message: [...state.message, {
                    id: state.message.length + 1,
                    title: action.newMessage,
                    completed: false
                }]
            }
        case ADD_COMPLETED_MONDAY:
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, completed: action.completed}
                    }
                    return v
                })
            }
        case UPDATE_MESSAGE_MONDAY:
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, title: action.updateMessage}
                    }
                    return v
                })
            }
        case REMOVE_MESSAGE_MONDAY:
            return {
                ...state,
                message: state.message.filter(v => {
                    if (v.id !== action.id) {
                        return {...v}
                    }
                    return null
                })
            }
        case REMOVE_ALL_MESSAGE_MONDAY:
            return {
                ...state,
                message: []
            }
        case ADD_MESSAGE_SERVER_MONDAY:
            return {
                ...state,
                message: [...state.message, {
                    id: state.message.length + 1,
                    title: action.title,
                    completed: action.completed
                }]
            }
        default:
            return state
    }

};

export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE_MONDAY, newMessage})
export const addCompletedAC = (completed, id) => ({type: ADD_COMPLETED_MONDAY, completed, id})
export const updateMessageAC = (updateMessage, id) => ({type: UPDATE_MESSAGE_MONDAY, updateMessage, id})
export const removeMessageAC = (id) => ({type: REMOVE_MESSAGE_MONDAY, id})
export const removeAllMessageAC = () => ({type: REMOVE_ALL_MESSAGE_MONDAY})
export const addMessageSeverAC = (title,completed) => ({type: ADD_MESSAGE_SERVER_MONDAY, title, completed})
export default reducerMonday;