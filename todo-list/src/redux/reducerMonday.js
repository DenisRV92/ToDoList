import React from 'react';
import {wrapMapToPropsConstant} from "react-redux/lib/connect/wrapMapToProps";

const ADD_MESSAGE_MONDAY = 'ADD_MESSAGE_MONDAY';
const ADD_CHECKED_MONDAY = 'ADD_CHECKED_MONDAY';
const UPDATE_MESSAGE_MONDAY = 'UPDATE_MESSAGE_MONDAY';
const REMOVE_MESSAGE_MONDAY = 'REMOVE_MESSAGE_MONDAY';
const REMOVE_ALL_MESSAGE_MONDAY = 'REMOVE_ALL_MESSAGE_MONDAY';
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
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, checked: action.checked}
                    }
                    return v
                })
            }
        case UPDATE_MESSAGE_MONDAY:
            return {
                ...state,
                message: state.message.map(v => {
                    if (v.id === action.id) {
                        return {...v, title: action.updateMessage}
                    }
                    return v
                })
            }
        case REMOVE_MESSAGE_MONDAY:
            return {
                ...state,
                message: state.message.filter(v => {
                    if (v.id !== action.id) {
                        return {...v}
                    }

                })
            }
        case REMOVE_ALL_MESSAGE_MONDAY:
            return {
                ...state,
                message: []
            }
        default:
            return state
    }

};

export const addMessageAC = (newMessage) => ({type: ADD_MESSAGE_MONDAY, newMessage})
export const addCheckedAC = (checked, id) => ({type: ADD_CHECKED_MONDAY, checked, id})
export const updateMessageAC = (updateMessage, id) => ({type: UPDATE_MESSAGE_MONDAY, updateMessage, id})
export const removeMessageAC = (id) => ({type: REMOVE_MESSAGE_MONDAY, id})
export const removeAllMessageAC = () => ({type: REMOVE_ALL_MESSAGE_MONDAY})
export default reducerMonday;