import React from 'react'
import { Link } from 'gatsby'
import Logo from './logo'


const Navigation = () => {
    return (
        <nav className="nav">
            <Logo/>
            <ul>
                <li>
                    <Link to="./">Home</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="./coffee">Buy Me A Coffee</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
