const ADD_MESSAGE_FRIDAY= 'ADD_MESSAGE_FRIDAY';
const ADD_CHECKED_FRIDAY= 'ADD_CHECKED_FRIDAY';
const UPDATE_MESSAGE_FRIDAY= 'UPDATE_MESSAGE_FRIDAY';
const REMOVE_MESSAGE_FRIDAY= 'REMOVE_MESSAGE_FRIDAY';
const REMOVE_ALL_MESSAGE_FRIDAY= 'REMOVE_ALL_MESSAGE_FRIDAY';
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
                    checked: false
                }]
            }
        case ADD_CHECKED_FRIDAY:
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, checked: action.checked}
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

                })
            }
        case REMOVE_ALL_MESSAGE_FRIDAY:
            return {
                ...state,
                message: []
            }
        default:
            return state
    }

};
export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE_FRIDAY, newMessage})
export const addCheckedAC = (checked, id) => ({type: ADD_CHECKED_FRIDAY, checked, id})
export const updateMessageAC = (updateMessage, id) => ({type: UPDATE_MESSAGE_FRIDAY, updateMessage, id})
export const removeMessageAC = (id) => ({type: REMOVE_MESSAGE_FRIDAY, id})
export const removeAllMessageAC = () => ({type: REMOVE_ALL_MESSAGE_FRIDAY})

export default reducerFriday;