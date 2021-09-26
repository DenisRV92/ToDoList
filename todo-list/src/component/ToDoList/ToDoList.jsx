import React from 'react';
import './ToDoList.module.css'

const ToDoListItems = (props) => {
    console.log(props.checked)
    let checked = '';
    const checkboxing = (e) => {
        checked = e.target.checked
        props.addNewCheked(checked, props.id)

    }

    return (

        <div className='todolist__message'>
            {props.checked ?
                <div>
                    <input type="checkbox" onClick={checkboxing}/>
                    <span className='message__decoration'>{props.title}</span>
                    <div className='message__bittons'></div>
                </div>
                :
                <div>
                    <input type="checkbox" onClick={checkboxing}/>
                    <span>{props.title}</span>
                    <div className='message__bittons'></div>
                </div>
            }
        </div>


    )
}

const ToDoList = (props) => {
    console.log(props.state)
    let ToDoListItem = props.state.map(v => <ToDoListItems title={v.title} addNewCheked={props.addNewCheked} id={v.id}
                                                           checked={v.checked}/>)
    let text = '';
    const input = (e) => {
        return text = e.target.value
    }
    console.log(text)
    const addMessage = (e) => {
        props.addNewMessage(text)
    }
    //
    // for (let key in props) {
    //     if (key == props.match.url.replace('/', '')) {

    return (

        <div className='list'>

            <div className="list__header">
                <span></span>
            </div>
            <div className='list__addtodo'>

                <input onChange={input} type="text"/>
                <button onClick={addMessage}>add</button>

            </div>
            <div className="list__todolist">
                {ToDoListItem}

            </div>

            {/*<div className="list__todolist">*/}
            {/*    /!*{props[key][0].title}*!/*/}
            {/*</div>*/}
            <div className="list__button">
                <button>Clear</button>
            </div>
        </div>
    );
    // }
    // }
    // return (
    //
    //     <div className='list'>
    //         <div className="list__header">
    //             <span>ToDoList</span>
    //         </div>
    //         <div className='list__addtodo'>
    //             <input type="text"/>
    //             <button>add</button>
    //         </div>
    //         <div className="list__todolist">
    //             sqsqs
    //         </div>
    //         <div className="list__button">
    //            <button>Clear</button>
    //         </div>
    //     </div>
    // );
};

export default ToDoList;