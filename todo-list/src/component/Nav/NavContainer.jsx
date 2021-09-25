// import React from 'react';
import {connect} from "react-redux";
import Nav from "./Nav";
import Monday from "../day/Monday/Monday";

let mapStateToProps=(state)=>{

    return{
        nav:state.nav.navLink
        // monday:state.doList.monday,
        // tuesday:state.doList.tuesday,
        // wednesday:state.doList.wednesday,
        // thursday:state.doList.thursday,
        // friday:state.doList.friday,
        // saturday:state.doList.saturday,
        // sunday:state.doList.sunday
    }
}

const NavContainer=connect(mapStateToProps)(Nav)
// connect(mapStateToProps)(Monday)
export default NavContainer