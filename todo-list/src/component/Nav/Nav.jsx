import React from 'react';
import './Nav.module.css'
import Monday from "../day/Monday/Monday";
import Friday from "../day/Friday/Friday";
import Wednesday from "../day/Wednesday/Wednesday";
import Thursday from "../day/Thursday/Thursday";
import Saturday from "../day/Saturday/Saturday";
import Sunday from "../day/Sunday/Sunday";
import Thuesday from "../day/Tuesday/Thuesday";

const Nav = (props) => {

    let day1 = props.monday.map(v => <Monday url={v.url} titleDay={v.titleDay} title={v.title}/>)
    let day2 = props.tuesday.map(v => <Thuesday url={v.url} titleDay={v.titleDay} title={v.title}/>)
    let day3 = props.wednesday.map(v => <Wednesday url={v.url} titleDay={v.titleDay} title={v.title}/>)
    let day4 = props.thursday.map(v => <Thursday url={v.url} titleDay={v.titleDay} title={v.title}/>)
    let day5 = props.friday.map(v => <Friday url={v.url} titleDay={v.titleDay} title={v.title}/>)
    let day6 = props.saturday.map(v => <Saturday url={v.url} titleDay={v.titleDay} title={v.title}/>)
    let day7 = props.sunday.map(v => <Sunday url={v.url} titleDay={v.titleDay} title={v.title}/>)
    return (

        <div className='nav'>
            <ul className='nav__list'>
                {day1} {day2} {day3}
                {day4} {day5} {day6}
                {day7}
                {/*{Days}*/}
                {/*<li>*/}
                {/*    <div className='list__item'>*/}
                {/*       Monday*/}
                {/*    </div>*/}
                {/*    <div className='list__question'>*/}
                {/*        sss*/}
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
                {/*        Wednesday*/}
                {/*    </div>*/}
                {/*    <div className='list__question'>*/}
                {/*        sss*/}
                {/*    </div>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <div className='list__item'>*/}
                {/*        Thursday*/}
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
                {/*        Sunday*/}
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