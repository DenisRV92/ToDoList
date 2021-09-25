import React from 'react';
import { NavLink } from "react-router-dom";
const Monday = (props) => {
    console.log(props.title)
    // {props.title.map((v)=><div>v</div>
        return (
            <div>
                <NavLink to={props.url}>
                    <li>
                        <div className='list__item'>
                            {props.titleDay}
                        </div>
                        <div className='list__question'>
                            {/*{props.title}*/}
                            {/*{props.title.map(v=>v)}*/}
                            <v/>
                        </div>
                    </li>
                </NavLink>
            </div>
        );
    // )
    // }
};

export default Monday;