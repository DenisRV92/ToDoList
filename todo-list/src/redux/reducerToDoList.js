// import React from 'react';

let initialState = {
    monday: [
        {id: 1, url: '/monday',title:'',titleDay:'Monday'},
    ],
    tuesday: [
        {id: 1, url: '/tuesday',title:'',titleDay:'Tuesday'},
    ],
    wednesday: [
        {id: 1, url: '/wednesday',title:'',titleDay:'Wednesday'},
    ],
    thursday: [
        {id: 1, url: '/thursday',title:'',titleDay:'Thursday'},
    ],
    friday: [
        {id: 1, url: '/friday',title:'',titleDay:'Friday'},
    ],

    saturday: [
        {id: 1, url: '/saturday',title:'',titleDay:'Saturday'},
    ],
    sunday: [
        {id: 1, url: '/sunday',title:'',titleDay:'Sunday'},
    ],
}
const reducerDoList = (state = initialState, action) => {

    return state
};

export default reducerDoList;