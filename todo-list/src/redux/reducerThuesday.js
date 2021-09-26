

const ADD_MESSAGE__THUESDAY = 'ADD_MESSAGE__THUESDAY';
let initialState = {
    message: [],
}
const reducerThuesday = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE__THUESDAY:
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
export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE__THUESDAY, newMessage})


export default reducerThuesday;