const ADD_MESSAGE_FRIDAY = 'ADD_MESSAGE_FRIDAY';
const ADD_COMPLETED_FRIDAY = 'ADD_COMPLETED_FRIDAY';
const UPDATE_MESSAGE_FRIDAY = 'UPDATE_MESSAGE_FRIDAY';
const REMOVE_MESSAGE_FRIDAY = 'REMOVE_MESSAGE_FRIDAY';
const REMOVE_ALL_MESSAGE_FRIDAY = 'REMOVE_ALL_MESSAGE_FRIDAY';
const ADD_MESSAGE_SERVER_FRIDAY='ADD_MESSAGE_SERVER_FRIDAY';
let initialState = {
    message: [],
}
const reducerFriday = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE_FRIDAY:
            return {
                ...state,
                message: [...state.message, {
                    id: state.message.length + 1,
                    title: action.newMessage,
                    completed: false
                }]
            }
        case ADD_COMPLETED_FRIDAY:
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, completed: action.completed}
                    }
                    return v
                })
            }
        case UPDATE_MESSAGE_FRIDAY:
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, title: action.updateMessage}
                    }
                    return v
                })
            }
        case REMOVE_MESSAGE_FRIDAY:
            return {
                ...state,
                message: state.message.filter(v => {
                    if (v.id !== action.id) {
                        return {...v}
                    }
                    return null
                })
            }
        case REMOVE_ALL_MESSAGE_FRIDAY:
            return {
                ...state,
                message: []
            }
        case ADD_MESSAGE_SERVER_FRIDAY:
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
export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE_FRIDAY, newMessage})
export const addCompletedAC = (completed, id) => ({type: ADD_COMPLETED_FRIDAY, completed, id})
export const updateMessageAC = (updateMessage, id) => ({type: UPDATE_MESSAGE_FRIDAY, updateMessage, id})
export const removeMessageAC = (id) => ({type: REMOVE_MESSAGE_FRIDAY, id})
export const removeAllMessageAC = () => ({type: REMOVE_ALL_MESSAGE_FRIDAY})
export const addMessageSeverAC = (title,completed) => ({type: ADD_MESSAGE_SERVER_FRIDAY, title, completed})

export default reducerFriday;