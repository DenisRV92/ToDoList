const ADD_MESSAGE_WEDNESDAY = 'ADD_MESSAGE_WEDNESDAY';
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
                }]
            }
        default:
            return state
    }

};
export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE_WEDNESDAY, newMessage})

export default reducerWednesday;