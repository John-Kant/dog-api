import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div className="header">
            <h2 className="logo">DarkCode</h2>
            <input type="checkbox" id="chk" />
            <label htmlFor="chk" className="show-menu-btn">
                <i className="fas fa-ellipsis-h" />
            </label>
            <ul className="menu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Works</a>
                <a href="#">Contact</a>
                <label htmlFor="chk" className="hide-menu-btn">
                    <i className="fas fa-times" />
                </label>
            </ul>
        </div>
    )
}

export default Navbar;
