import React, {useState} from 'react';
import './ToDoList.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faTrashAlt,
    faPenAlt,
    faSave,
} from "@fortawesome/free-solid-svg-icons";


const ToDoListItems = (props) => {
    let [editor, setEditor] = useState(false)
    const [value, setValue] = useState(props.title);
    let checked = '';
    const checkboxing = (e) => {
        checked = e.target.checked
        props.addNewCheked(checked, props.id)

    }
    const editorList = (e) => {
        setEditor(true)
    }
    let text = '';
    const input = (e) => {
        // e.target.value
        setValue(e.target.value)
        return text = e.target.value
    }

    const addMessage = (e) => {
        props.addNewMessage(text)
    }
    return (

        <div className='todolist__message'>
            {props.checked ?
                <div className='message__block'>
                    <input className='block__checkbox' type="checkbox" checked={props.checked} onClick={checkboxing}/>
                    <span className='block__decoration'>{props.title}</span>
                    <div className='block__buttons'>
                        <div>
                            <FontAwesomeIcon icon={faPenAlt}/>
                        </div>
                        <div>
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
                                <div onClick={editorList}>{<FontAwesomeIcon icon={faPenAlt}/>}</div>
                                <div><FontAwesomeIcon icon={faTrashAlt}/></div>
                            </div>
                        </div>
                        :
                        <div className='message__block'>
                            <input className='block__checkbox' disabled={true} type="checkbox" onClick={checkboxing}/>
                            <input onChange={input} className='block__checkboxEditor' maxlength='90' value={value}/>
                            <div className='block__buttons'>
                                <div onClick={addMessage}>{<FontAwesomeIcon icon={faSave}/>}</div>
                                <div><FontAwesomeIcon icon={faTrashAlt}/></div>
                            </div>
                        </div>
                    }
                </div>
            }
        </div>


    )
}

const ToDoList = (props) => {

    let ToDoListItem = props.state.map(v => <ToDoListItems title={v.title}
                                                           addNewCheked={props.addNewCheked}
                                                           id={v.id}
                                                           checked={v.checked}/>)
    let text = '';
    const input = (e) => {
        return text = e.target.value
    }

    const addMessage = (e) => {
        props.addNewMessage(text)
    }

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

            <div className="list__button">
                <button>Clear</button>
            </div>
        </div>
    );

};

export default ToDoList;