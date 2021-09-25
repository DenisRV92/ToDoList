import React from 'react';
const ADD_MESSAGE = 'ADD_MESSAGE';
let initialState = {
    message: [
        // {titleDay:'Monday'},
    ]
}
const ReducerMonday = (state = initialState,action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                message: [...state.message, {
                    id: state.message.length + 1,
                    title: action.newMessage,
                }]
                // id: state.monday.length + 1,
                // url: '/monday',
                // title: action.newMessage,

            }
        // posts: [...state.posts, {id: state.posts.length + 1, message: action.newMyPost, likeCount: 0}],


        default:
            return state

    }

};
export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE, newMessage})

export default ReducerMonday;