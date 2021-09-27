
import {connect} from "react-redux";
import Nav from "./Nav";


let mapStateToProps=(state)=>{

    return{
        nav:state.nav.navLink
    }
}

const NavContainer=connect(mapStateToProps)(Nav)
export default NavContainer