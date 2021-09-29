import React from 'react';
import {NavLink} from "react-router-dom";
import imageList from "../../../images/list.png";

const NavItems = (props) => {
    return (
        <div>
            <NavLink to={props.url}>
                <li>
                    <div className='list__item'>
                        {props.titleDay}
                    </div>
                    <div className='list__question'>
                        <img src={imageList} alt=""/>
                    </div>
                </li>
            </NavLink>
        </div>
    )
}
export default NavItems;