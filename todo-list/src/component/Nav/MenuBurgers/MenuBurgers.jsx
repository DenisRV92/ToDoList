import React from 'react';
import {NavLink} from "react-router-dom";

const MenuBurgers = (props) => {
    return (

        <div className="burger__nav__item">
            <NavLink to={props.url}>
                <div>{props.titleDay} </div>
            </NavLink>
        </div>
    )

}
export default MenuBurgers;