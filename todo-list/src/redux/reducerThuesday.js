


const ADD_MESSAGE_THUESDAY = 'ADD_MESSAGE_THUESDAY';
const ADD_CHECKED_THUESDAY = 'ADD_CHECKED_THUESDAY';
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
                    checked: false
                }]
            }
        case ADD_CHECKED_THUESDAY:
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, checked: action.checked}
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
export const addCheckedAC = (checked, id) => ({type: ADD_CHECKED_THUESDAY, checked, id})
export const updateMessageAC = (updateMessage, id) => ({type: UPDATE_MESSAGE_THUESDAY, updateMessage, id})
export const removeMessageAC = (id) => ({type: REMOVE_MESSAGE_THUESDAY, id})
export const removeAllMessageAC = () => ({type: REMOVE_ALL_MESSAGE_THUESDAY})
export default reducerThuesday;