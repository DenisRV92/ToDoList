const ADD_MESSAGE_THUESDAY = 'ADD_MESSAGE_THUESDAY';
const ADD_COMPLETED_THUESDAY = 'ADD_CHECKED_THUESDAY';
const UPDATE_MESSAGE_THUESDAY = 'UPDATE_MESSAGE_THUESDAY';
const REMOVE_MESSAGE_THUESDAY = 'REMOVE_MESSAGE_THUESDAY';
const REMOVE_ALL_MESSAGE_THUESDAY = 'REMOVE_ALL_MESSAGE_THUESDAY';
let initialState = {
    message: [],
}
const reducerThuesday = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE_THUESDAY:
            return {
                ...state,
                message: [...state.message, {
                    id: state.message.length + 1,
                    title: action.newMessage,
                    completed: false
                }]
            }
        case ADD_COMPLETED_THUESDAY:
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, completed: action.completed}
                    }
                    return v
                })
            }
        case UPDATE_MESSAGE_THUESDAY:
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, title: action.updateMessage}
                    }
                    return v
                })
            }
        case REMOVE_MESSAGE_THUESDAY:
            return {
                ...state,
                message: state.message.filter(v => {
                    if (v.id !== action.id) {
                        return {...v}
                    }
                    return null
                })
            }
        case REMOVE_ALL_MESSAGE_THUESDAY:
            return {
                ...state,
                message: []
            }
        default:
            return state
    }

};

export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE_THUESDAY, newMessage})
export const addCompletedAC = (completed, id) => ({type: ADD_COMPLETED_THUESDAY, completed, id})
export const updateMessageAC = (updateMessage, id) => ({type: UPDATE_MESSAGE_THUESDAY, updateMessage, id})
export const removeMessageAC = (id) => ({type: REMOVE_MESSAGE_THUESDAY, id})
export const removeAllMessageAC = () => ({type: REMOVE_ALL_MESSAGE_THUESDAY})
export default reducerThuesday;