import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import "./Navbar.css"

function Navbar() {
    return (
        <div className="header">
            <h2 className="logo">Dog Api</h2>
            <input type="checkbox" id="chk" />
            <label htmlFor="chk" className="show-menu-btn">
                <FaBars />
            </label>
            <ul className="menu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Works</a>
                <a href="#">Contact</a>
                <label htmlFor="chk" className="hide-menu-btn">
                    <FaTimes />
                </label>
            </ul>
        </div>
    )
}

export default Navbar;
