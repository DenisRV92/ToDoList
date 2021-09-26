

const ADD_MESSAGE_THUSRDAY = 'ADD_MESSAGE_THUSRDAY';
let initialState = {
    message: [],
}
const reducerThursday = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_THUSRDAY:
            return {
                ...state,
                message: [...state.message, {
                    id: state.message.length + 1,
                    title: action.newMessage,
                }]
            }
        default:
            return state
    }

};
export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE_THUSRDAY, newMessage})

export default reducerThursday;