import React, {useState} from 'react';
import './Nav.module.css'
import imageList from '../../images/list.png'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBars
} from "@fortawesome/free-solid-svg-icons";

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
const MenuBurgers = (props) => {
    return (

        <div className="burger__nav__item">
            <NavLink to={props.url}>
                <div>{props.titleDay} </div>
            </NavLink>
        </div>
    )

}
const Nav = (props) => {

    let NavItem = props.nav.map(v => <NavItems key={v.id} url={v.url} titleDay={v.titleDay}/>)
    let MenuBurger = props.nav.map(v => <MenuBurgers key={v.id} url={v.url} titleDay={v.titleDay}/>)
    const [state, setState] = useState(true)
    const clickMenu = (e) => {
        setState(false)
        // const MenuBurgers = (props) => {
        //     return(
        //         <NavLink to={props.url}>{props.titleDay}</NavLink>
        //     )
        //
        // }
        // setState(true)
    }

    const onStateBlur = () => {
        setState(true)
    }
    return (

        <div className='nav'>
            <ul className='nav__list'>
                {NavItem}
                {/*{MenuBurger}*/}
            </ul>
            {state ?

                <div className='nav__menu'>
                    <div onClick={clickMenu} className='menu__burger__logo'>
                        <FontAwesomeIcon icon={faBars} size='5x'/>
                    </div>
                </div>
                :
                <div  onMouseLeave={onStateBlur} onClick={onStateBlur} className="menu__burger__nav">
                    {/*<div className="burger__nav__logo">*/}
                    {/*    <FontAwesomeIcon icon={faBars} size='2x'/>*/}
                    {/*</div>*/}
                    {/*<div className="burger__nav__item" onClick={onStateBlur}>*/}
                    {MenuBurger}

                    {/*</div>*/}
                    {/*<NavLink to={props.url}>{props.titleDay}</NavLink>*/}
                </div>
            }
            {/*onMouseLeave={onStateBlur}*/}
            {/*{MenuBurger}*/}

        </div>
    );
};

export default Nav;