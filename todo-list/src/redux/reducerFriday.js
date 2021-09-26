

const ADD_MESSAGE__FRIDAY = 'ADD_MESSAGE__FRIDAY';
let initialState = {
    message: [],
}
const reducerFriday = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE__FRIDAY:
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
export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE__FRIDAY, newMessage})

export default reducerFriday;