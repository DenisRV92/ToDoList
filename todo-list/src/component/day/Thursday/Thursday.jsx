import React from 'react';
import {NavLink} from "react-router-dom";

const Thursday = (props) => {
    return (
        <div>
            <NavLink to={props.url}>
                <li>
                    <div className='list__item'>
                        {props.titleDay}
                    </div>
                    <div className='list__question'>
                        {props.title}
                    </div>
                </li>
            </NavLink>
        </div>
    );
};

export default Thursday;