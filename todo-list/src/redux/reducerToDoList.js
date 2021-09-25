const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    monday: [
        {id: 1, url: '/monday', title: '', titleDay: 'Monday'},
    ],
    tuesday: [
        {id: 1, url: '/tuesday', title: '', titleDay: 'Tuesday'},
    ],
    wednesday: [
        {id: 1, url: '/wednesday', title: '', titleDay: 'Wednesday'},
    ],
    thursday: [
        {id: 1, url: '/thursday', title: '', titleDay: 'Thursday'},
    ],
    friday: [
        {id: 1, url: '/friday', title: '', titleDay: 'Friday'},
    ],

    saturday: [
        {id: 1, url: '/saturday', title: '', titleDay: 'Saturday'},
    ],
    sunday: [
        {id: 1, url: '/sunday', title: '', titleDay: 'Sunday'},
    ],
}
const reducerDoList = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                monday: [...state.monday, {
                    id: state.monday.length + 1,
                    url: '/monday',
                    title: action.newMessage,

                }]
                // posts: [...state.posts, {id: state.posts.length + 1, message: action.newMyPost, likeCount: 0}],

            }

        default:
            return state
    }
};
export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE, newMessage})
debugger
export default reducerDoList;