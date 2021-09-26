import React from 'react';

const ADD_MESSAGE_MONDAY = 'ADD_MESSAGE_MONDAY';
const ADD_CHECKED_MONDAY = 'ADD_CHECKED_MONDAY';
let initialState = {
    message: [],
}
const reducerMonday = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE_MONDAY:
            return {
                ...state,
                message: [...state.message, {
                    id: state.message.length + 1,
                    title: action.newMessage,
                    checked: false
                }]
            }
        case ADD_CHECKED_MONDAY:
            debugger
            return {
                ...state,
                message: state.message.map(v=>{
                    if (v.id === action.id) {
                        return {...v,checked: action.checked}
                    }
                    return v
                })
            }
        default:
            return state
    }
    debugger
};
export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE_MONDAY, newMessage})
export const addCheckedAC = (checked, id) => ({type: ADD_CHECKED_MONDAY, checked, id})
export default reducerMonday;