import React from 'react';
import './Nav.module.css'
import Monday from "../day/Monday/Monday";
import Friday from "../day/Friday/Friday";
import WednesdayContainer from "../day/Wednesday/WednesdayContainer";
import ThursdayContainer from "../day/Thursday/ThursdayContainer";
import Saturday from "../day/Saturday/SaturdayContainer";
import SundayContainer from "../day/Sunday/SundayContainer";
import ThuesdayContainer from "../day/Tuesday/ThuesdayContainer";
import imageList from '../../images/list.png'
import {NavLink} from "react-router-dom";

const NavItems=(props)=>{

 return(
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
let NavItem=props.nav.map(v => <NavItems url={v.url} titleDay={v.titleDay}/>)
    // let day1 = props.monday.map(v => <Monday url={v.url} titleDay={v.titleDay} title={v.title}/>)

    // let day2 = props.tuesday.map(v => <ThuesdayContainer url={v.url} titleDay={v.titleDay} title={v.title}/>)
    // let day3 = props.wednesday.map(v => <WednesdayContainer url={v.url} titleDay={v.titleDay} title={v.title}/>)
    // let day4 = props.thursday.map(v => <ThursdayContainer url={v.url} titleDay={v.titleDay} title={v.title}/>)
    // let day5 = props.friday.map(v => <Friday url={v.url} titleDay={v.titleDay} title={v.title}/>)
    // let day6 = props.saturday.map(v => <Saturday url={v.url} titleDay={v.titleDay} title={v.title}/>)
    // let day7 = props.sunday.map(v => <SundayContainer url={v.url} titleDay={v.titleDay} title={v.title}/>)
    return (

        <div className='nav'>
            <ul className='nav__list'>
                {NavItem}
                {/*{day1} {day2} {day3}*/}
                {/*{day4} {day5} {day6}*/}
                {/*{day7}*/}
                {/*{Days}*/}
                {/*<li>*/}
                {/*    <div className='list__item'>*/}

                {/*    </div>*/}
                {/*    <div className='list__question'>*/}
                {/*        <img src={imageList} alt=""/>*/}
                {/*    </div>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <div className='list__item'>*/}
                {/*        Tuesday*/}
                {/*    </div>*/}
                {/*    <div className='list__question'>*/}
                {/*        sss*/}
                {/*    </div>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <div className='list__item'>*/}
                {/*        WednesdayContainer*/}
                {/*    </div>*/}
                {/*    <div className='list__question'>*/}
                {/*        sss*/}
                {/*    </div>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <div className='list__item'>*/}
                {/*        ThursdayContainer*/}
                {/*    </div>*/}
                {/*    <div className='list__question'>*/}
                {/*        sss*/}
                {/*    </div>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <div className='list__item'>*/}
                {/*        Friday*/}
                {/*    </div>*/}
                {/*    <div className='list__question'>*/}
                {/*        sss*/}
                {/*    </div>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <div className='list__item'>*/}
                {/*        Saturday*/}
                {/*    </div>*/}
                {/*    <div className='list__question'>*/}
                {/*        sss*/}
                {/*    </div>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <div className='list__item'>*/}
                {/*        SundayContainer*/}
                {/*    </div>*/}
                {/*    <div className='list__question'>*/}
                {/*        sss sss sss sss sss sss sss sss sss sss sss sss sss*/}
                {/*    </div>*/}
                {/*</li>*/}
            </ul>

        </div>
    );
};

export default Nav;