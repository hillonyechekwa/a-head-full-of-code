import React from 'react'
import {Link} from 'gatsby'


const Navigation = () => {
    return (
        <nav className="">
            <ul>
                <li>
                    <Link href="./">Home</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
                <li>
                    <Link href="/About">About</Link>
                </li>
                <li>
                    <Link href="./coffee">Buy Me A Coffee</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
