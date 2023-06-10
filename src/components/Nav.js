import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <div className="navbar">
            <NavLink className="nav-link" exact to="/">🏠 Home</NavLink>               
            <NavLink className="nav-link" exact to="/new">➕ Add Book</NavLink>
        </div>
    )
}

export default Nav;