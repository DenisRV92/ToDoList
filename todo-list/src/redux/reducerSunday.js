const ADD_MESSAGE_SUNDAY= 'ADD_MESSAGE_SUNDAY';
const ADD_CHECKED_SUNDAY= 'ADD_CHECKED_SUNDAY';
const UPDATE_MESSAGE_SUNDAY= 'UPDATE_MESSAGE_SUNDAY';
const REMOVE_MESSAGE_SUNDAY= 'REMOVE_MESSAGE_SUNDAY';
const REMOVE_ALL_MESSAGE_SUNDAY= 'REMOVE_ALL_MESSAGE_SUNDAY';
let initialState = {
    message: [],
}
const reducerSunday = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE_SUNDAY:
            return {
                ...state,
                message: [...state.message, {
                    id: state.message.length + 1,
                    title: action.newMessage,
                    checked: false
                }]
            }
        case ADD_CHECKED_SUNDAY:
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, checked: action.checked}
                    }
                    return v
                })
            }
        case UPDATE_MESSAGE_SUNDAY:
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, title: action.updateMessage}
                    }
                    return v
                })
            }
        case REMOVE_MESSAGE_SUNDAY:
            return {
                ...state,
                message: state.message.filter(v => {
                    if (v.id !== action.id) {
                        return {...v}
                    }

                })
            }
        case REMOVE_ALL_MESSAGE_SUNDAY:
            return {
                ...state,
                message: []
            }
        default:
            return state
    }

};
export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE_SUNDAY, newMessage})
export const addCheckedAC = (checked, id) => ({type: ADD_CHECKED_SUNDAY, checked, id})
export const updateMessageAC = (updateMessage, id) => ({type: UPDATE_MESSAGE_SUNDAY, updateMessage, id})
export const removeMessageAC = (id) => ({type: REMOVE_MESSAGE_SUNDAY, id})
export const removeAllMessageAC = () => ({type: REMOVE_ALL_MESSAGE_SUNDAY})


export default reducerSunday;