import React from 'react';
import './ToDoList.module.css'

const ToDoList = () => {
    return (

        <div className='list'>
            <div className="list__header">
                <span>ToDoList</span>
            </div>
            <div className='list__addtodo'>
                <input type="text"/>
                <button>add</button>
            </div>
            <div className="list__todolist">
                sqsqs
            </div>
            <div className="list__button">
               <button>Clear</button>
            </div>
        </div>
    );
};

export default ToDoList;