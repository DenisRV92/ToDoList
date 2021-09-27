const ADD_MESSAGE_SATURDAY = 'ADD_MESSAGE_SATURDAY';
const ADD_COMPLETED_SATURDAY = 'ADD_CHECKED_SATURDAY';
const UPDATE_MESSAGE_SATURDAY = 'UPDATE_MESSAGE_SATURDAY';
const REMOVE_MESSAGE_SATURDAY = 'REMOVE_MESSAGE_SATURDAY';
const REMOVE_ALL_MESSAGE_SATURDAY = 'REMOVE_ALL_MESSAGE_SATURDAY';
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
                    completed: false
                }]
            }
        case ADD_COMPLETED_SATURDAY:
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, completed: action.completed}
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
                    return null
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
export const addCompletedAC = (completed, id) => ({type: ADD_COMPLETED_SATURDAY, completed, id})
export const updateMessageAC = (updateMessage, id) => ({type: UPDATE_MESSAGE_SATURDAY, updateMessage, id})
export const removeMessageAC = (id) => ({type: REMOVE_MESSAGE_SATURDAY, id})
export const removeAllMessageAC = () => ({type: REMOVE_ALL_MESSAGE_SATURDAY})

export default reducerSaturday;