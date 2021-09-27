const ADD_MESSAGE_WEDNESDAY = 'ADD_MESSAGE_WEDNESDAY';
const ADD_CHECKED_WEDNESDAY = 'ADD_CHECKED_WEDNESDAY';
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
                    checked: false
                }]
            }
        case ADD_CHECKED_WEDNESDAY:
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, checked: action.checked}
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
export const addCheckedAC = (checked, id) => ({type: ADD_CHECKED_WEDNESDAY, checked, id})
export const updateMessageAC = (updateMessage, id) => ({type: UPDATE_MESSAGE_WEDNESDAY, updateMessage, id})
export const removeMessageAC = (id) => ({type: REMOVE_MESSAGE_WEDNESDAY, id})
export const removeAllMessageAC = () => ({type: REMOVE_ALL_MESSAGE_WEDNESDAY})

export default reducerWednesday;