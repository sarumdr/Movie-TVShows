import React, {Component} from "react";
import './style.css'
import {Link} from "react-router-dom";

class NavBar extends Component{
    render() {
        return(
            <div>
            <nav className="navbar ">
                <Link className="navbar-brand navName" to='/'>TvShowsApp </Link>
                <p className='a'>aaa</p>
            </nav>
            </div>
        )
    }
}

export default NavBar