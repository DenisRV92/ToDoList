const ADD_MESSAGE_WEDNESDAY = 'ADD_MESSAGE_WEDNESDAY';
const ADD_COMPLETED_WEDNESDAY = 'ADD_CHECKED_WEDNESDAY';
const UPDATE_MESSAGE_WEDNESDAY = 'UPDATE_MESSAGE_WEDNESDAY';
const REMOVE_MESSAGE_WEDNESDAY = 'REMOVE_MESSAGE_WEDNESDAY';
const REMOVE_ALL_MESSAGE_WEDNESDAY = 'REMOVE_ALL_MESSAGE_WEDNESDAY';
let initialState = {
    message: [],
}
const reducerWednesday = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE_WEDNESDAY:
            return {
                ...state,
                message: [...state.message, {
                    id: state.message.length + 1,
                    title: action.newMessage,
                    completed: false
                }]
            }
        case ADD_COMPLETED_WEDNESDAY:
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, completed: action.completed}
                    }
                    return v
                })
            }
        case UPDATE_MESSAGE_WEDNESDAY:
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, title: action.updateMessage}
                    }
                    return v
                })
            }
        case REMOVE_MESSAGE_WEDNESDAY:
            return {
                ...state,
                message: state.message.filter(v => {
                    if (v.id !== action.id) {
                        return {...v}
                    }
                    return null
                })
            }
        case REMOVE_ALL_MESSAGE_WEDNESDAY:
            return {
                ...state,
                message: []
            }
        default:
            return state
    }

};

export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE_WEDNESDAY, newMessage})
export const addCompletedAC = (completed, id) => ({type: ADD_COMPLETED_WEDNESDAY, completed, id})
export const updateMessageAC = (updateMessage, id) => ({type: UPDATE_MESSAGE_WEDNESDAY, updateMessage, id})
export const removeMessageAC = (id) => ({type: REMOVE_MESSAGE_WEDNESDAY, id})
export const removeAllMessageAC = () => ({type: REMOVE_ALL_MESSAGE_WEDNESDAY})

export default reducerWednesday;