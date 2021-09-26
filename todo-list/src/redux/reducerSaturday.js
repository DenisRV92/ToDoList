
const ADD_MESSAGE__SATURDAY = 'ADD_MESSAGE__SATURDAY';
let initialState = {
    message: [],
}
const reducerSaturday = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE__SATURDAY:
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
export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE__SATURDAY, newMessage})


export default reducerSaturday;