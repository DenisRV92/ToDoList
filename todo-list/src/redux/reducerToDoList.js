import React from 'react';

let initialState = {
    monday: [
        {
            url: '/monday',
            doList:[{}]
        }
    ],
    tuesday: [
        {
            url: '/tuesday',
            doList:[{}]
        }
    ],
    wednesday: [
        {
            url: '/wednesday',
            doList:[{}]
        }
    ],
    thursday: [
        {
            url: '/thursday',
            doList:[{}]
        }
    ],
    friday: [
        {
            url: '/friday',
            doList:[{}]
        }
    ],

    saturday: [
        {
            url: '/saturday',
            doList:[{}]
        }
    ],
    sunday: [
        {
            url: '/sunday',
            doList:[{}]
        }
    ],
}
const reducerDoList = (state = initialState, action) => {
    debugger
    return state
};

export default reducerDoList;