
const ADD_MESSAGE_SANDAY = 'ADD_MESSAGE_SANDAY';
let initialState = {
    message: [],
}
const reducerSanday = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_SANDAY:
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
export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE_SANDAY, newMessage})


export default reducerSanday;