const ADD_MESSAGE_THURSDAY = 'ADD_MESSAGE_THURSDAY';
const ADD_COMPLETED_THURSDAY = 'ADD_CHECKED_THURSDAY';
const UPDATE_MESSAGE_THURSDAY = 'UPDATE_MESSAGE_THURSDAY';
const REMOVE_MESSAGE_THURSDAY = 'REMOVE_MESSAGE_THURSDAY';
const REMOVE_ALL_MESSAGE_THURSDAY = 'REMOVE_ALL_MESSAGE_THURSDAY';
const ADD_MESSAGE_SERVER_THURSDAY='ADD_MESSAGE_SERVER_THURSDAY'
let initialState = {
    message: [],
}
const reducerThursday = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE_THURSDAY:
            return {
                ...state,
                message: [...state.message, {
                    id: state.message.length + 1,
                    title: action.newMessage,
                    completed: false
                }]
            }
        case ADD_COMPLETED_THURSDAY:
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, completed: action.completed}
                    }
                    return v
                })
            }
        case UPDATE_MESSAGE_THURSDAY:
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, title: action.updateMessage}
                    }
                    return v
                })
            }
        case REMOVE_MESSAGE_THURSDAY:
            return {
                ...state,
                message: state.message.filter(v => {
                    if (v.id !== action.id) {
                        return {...v}
                    }
                    return null
                })
            }
        case REMOVE_ALL_MESSAGE_THURSDAY:
            return {
                ...state,
                message: []
            }
        case ADD_MESSAGE_SERVER_THURSDAY:
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

export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE_THURSDAY, newMessage})
export const addCompletedAC = (completed, id) => ({type: ADD_COMPLETED_THURSDAY, completed, id})
export const updateMessageAC = (updateMessage, id) => ({type: UPDATE_MESSAGE_THURSDAY, updateMessage, id})
export const removeMessageAC = (id) => ({type: REMOVE_MESSAGE_THURSDAY, id})
export const removeAllMessageAC = () => ({type: REMOVE_ALL_MESSAGE_THURSDAY})
export const addMessageSeverAC = (title,completed) => ({type: ADD_MESSAGE_SERVER_THURSDAY, title, completed})

export default reducerThursday;