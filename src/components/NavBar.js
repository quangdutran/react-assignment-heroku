import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    const loggedInUser = localStorage.getItem("userInfo");
    return (
        <div>
            <nav>
                <div>   
                    <ul className="nav-list">
                        <li className="nav-item">
                        <NavLink exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact to="/posts">Posts</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact to="/profile">Profile</NavLink>
                        </li>
                        {loggedInUser ? (
                            <li className="nav-item">
                            <NavLink exact to="/logout">Logout</NavLink>
                            </li>
                        ) : (
                            <li className="nav-item">
                            <NavLink exact to="/login">Login</NavLink>
                            </li>
                        )}
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
