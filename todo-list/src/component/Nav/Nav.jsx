import React from 'react';
import './Nav.module.css'

const Nav = (props) => {
console.log(props)
    return (

        <div className='nav'>
            <ul className='nav__list'>
                <li>
                    <div className='list__item'>
                       Monday
                    </div>
                    <div className='list__question'>
                        sss
                    </div>
                </li>
                <li>
                    <div className='list__item'>
                        Tuesday
                    </div>
                    <div className='list__question'>
                        sss
                    </div>
                </li>
                <li>
                    <div className='list__item'>
                        Wednesday
                    </div>
                    <div className='list__question'>
                        sss
                    </div>
                </li>
                <li>
                    <div className='list__item'>
                        Thursday
                    </div>
                    <div className='list__question'>
                        sss
                    </div>
                </li>
                <li>
                    <div className='list__item'>
                        Friday
                    </div>
                    <div className='list__question'>
                        sss
                    </div>
                </li>
                <li>
                    <div className='list__item'>
                        Saturday
                    </div>
                    <div className='list__question'>
                        sss
                    </div>
                </li>
                <li>
                    <div className='list__item'>
                        Sunday
                    </div>
                    <div className='list__question'>
                        sss sss sss sss sss sss sss sss sss sss sss sss sss
                    </div>
                </li>
            </ul>

        </div>
    );
};

export default Nav;