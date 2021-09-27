import React from 'react';
import './Nav.module.css'
import imageList from '../../images/list.png'
import {NavLink} from "react-router-dom";

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
const Nav = (props) => {

    let NavItem = props.nav.map(v => <NavItems key={v.id} url={v.url} titleDay={v.titleDay}/>)

    return (

        <div className='nav'>
            <ul className='nav__list'>
                {NavItem}
            </ul>

        </div>
    );
};

export default Nav;