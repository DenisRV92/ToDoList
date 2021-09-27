import React, {useEffect, useState} from 'react';
import './ToDoList.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faTrashAlt,
    faPenAlt,
    faSave,
    faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import * as axios from "axios";
// import {addMessageSeverAC} from "../../redux/reducerMonday";



const ToDoListItems = (props) => {

    // props.addNewMessageSever()
    let [editor, setEditor] = useState(false)
    const [value, setValue] = useState(props.title);


    let completed = '';
    const checkboxing = (e) => {
        completed = e.target.checked
        props.addNewCheked(completed, props.id)

    }

    const editorList = (e) => {
        setEditor(true)
    }


    const input = (e) => {
        setValue(e.target.value)
    }

    const updateMessage = (e) => {
        props.updateNewMessage(value, props.id)
        setEditor(false)
    }
    const removeMessage = () => {
        props.removeNewMessage(props.id)
    }
    const removeMessageEditor = () => {
        props.removeNewMessage(props.id)
    }
    return (

        <div className='todolist__message'>
            {props.completed ?
                <div className='message__block'>
                    <input className='block__checkbox' type="checkbox" checked={props.completed} onChange={checkboxing}/>
                    <span className='block__decoration'>{props.title}</span>
                    <div className='block__buttons'>
                        <div disabled={true}>
                            <FontAwesomeIcon icon={faPenAlt} style={{color: 'lightslategrey'}}/>
                        </div>
                        <div className='buttons__icons' onClick={removeMessageEditor}>
                            <FontAwesomeIcon icon={faTrashAlt}/>
                        </div>
                    </div>
                </div>
                :
                <div>
                    {!editor ?
                        <div className='message__block'>
                            <input className='block__checkbox' type="checkbox" onClick={checkboxing}/>
                            <span>{props.title}</span>
                            <div className='block__buttons'>
                                <div className='buttons__icons' onClick={editorList}>{<FontAwesomeIcon
                                    icon={faPenAlt}/>}</div>
                                <div className='buttons__icons' onClick={removeMessage}><FontAwesomeIcon
                                    icon={faTrashAlt}/></div>
                            </div>
                        </div>
                        :
                        <div className='message__block'>
                            <input className='block__checkbox' disabled={true} type="checkbox" onClick={checkboxing}/>
                            <textarea onChange={input} className='block__checkboxEditor' value={value}/>
                            <div className='block__buttons'>
                                <div className='buttons__icons' onClick={updateMessage}>{<FontAwesomeIcon icon={faSave}
                                                                                                          style={{width: '21px'}}/>}</div>
                                <div className='buttons__icons' disabled={true}><FontAwesomeIcon icon={faTrashAlt}
                                                                                                 style={{color: 'lightslategrey'}}/>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            }
        </div>


    )
}

const ToDoList = (props) => {
    console.log(props)
// console.log(window.location.pathname)
    let ToDoListItem = props.state.map(v => <ToDoListItems title={v.title}
                                                           key={v.id}
                                                           addNewCheked={props.addNewCheked}
                                                           updateNewMessage={props.updateNewMessage}
                                                           removeNewMessage={props.removeNewMessage}
                                                           addNewMessageSever={props.addNewMessageSever}
                                                           id={v.id}
                                                           completed={v.completed}/>)

    let [text, setText] = useState('')

    const input = (e) => {
        setText(e.target.value)
    }
    // let [text,setText]=useState()

    const addMessage = (e) => {
        if (text !== '') {
            props.addNewMessage(text)
            setText('')
        }
    }
    const removeAllMessage = () => {
        props.removeNewAllMessage()
    }

    //     if (key == props.match.url.replace('/', '')) {

    return (

        <div className='list'>

            <div className="list__header">
                <span>{window.location.pathname.replace('/', '')}</span>
            </div>
            <div className='list__addtodo'>
                <img src="" alt=""/>
                <input placeholder='enter text' onChange={input} type="text" value={text}/>
                <button onClick={addMessage}><FontAwesomeIcon icon={faPlusCircle} size="lg"/></button>

            </div>
            <div className="list__todolist">
                {ToDoListItem}

            </div>

            <div className="list__button">
                <button onClick={removeAllMessage}>Clear</button>
            </div>
        </div>
    );

};

export default ToDoList;