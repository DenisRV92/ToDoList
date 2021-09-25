import React from 'react';
import './ToDoList.module.css'

const ToDoList = (props) => {
    // console.log(props.match.url.replace('/',''))
    // console.log(props)
   for(let key in props){
       if(key==props.match.url.replace('/','')){
           console.log(props[key])
           return (

               <div className='list'>
                   <div className="list__header">
                       <span>{props[key][0].titleDay}</span>
                   </div>
                   <div className='list__addtodo'>
                       <input type="text"/>
                       <button>add</button>
                   </div>
                   <div className="list__todolist">
                       {props[key][0].title}
                   </div>
                   <div className="list__button">
                       <button>Clear</button>
                   </div>
               </div>
           );
       }
   }
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