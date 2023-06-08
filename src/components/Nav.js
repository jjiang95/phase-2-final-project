import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <div>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/new">Add Book</NavLink></li>
            </ul>
        </div>
    )
}

export default Nav;