import React, {useState} from 'react';
import './Nav.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBars
} from "@fortawesome/free-solid-svg-icons";
import NavItems from "./Navitems/NavItems";
import MenuBurgers from "./MenuBurgers/MenuBurgers";

const Nav = (props) => {

    let NavItem = props.nav.map(v => <NavItems key={v.id} url={v.url} titleDay={v.titleDay}/>)
    let MenuBurger = props.nav.map(v => <MenuBurgers key={v.id} url={v.url} titleDay={v.titleDay}/>)
    const [state, setState] = useState(true)
    const clickMenu = (e) => {
        setState(false)
    }

    const onStateBlur = () => {
        setState(true)
    }
    return (

        <div className='nav'>
            <ul className='nav__list'>
                {NavItem}
            </ul>
            {state ?

                <div className='nav__menu'>
                    <div onClick={clickMenu} className='menu__burger__logo'>
                        <FontAwesomeIcon icon={faBars} size='5x'/>
                    </div>
                </div>
                :
                <div onMouseLeave={onStateBlur} onClick={onStateBlur} className="menu__burger__nav">
                    {MenuBurger}
                </div>
            }

        </div>
    );
};

export default Nav;