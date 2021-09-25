import React from 'react';
import {connect} from "react-redux";
import Nav from "./Nav";

let mapStateToProps=(state)=>{
    return{
        state:state.doList
    }
}
const NavContainer=connect(mapStateToProps)(Nav)
export default NavContainer