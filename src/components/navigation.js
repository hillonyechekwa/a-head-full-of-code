import React, {useState, useEffect} from "react"
import { Link } from "gatsby"


const Navigation = () => {

  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    const changeBgOnScroll = () => {
      if (window.scrollY >= 80) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }

    window.addEventListener('scroll', changeBgOnScroll)
  },[navbar])


  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="./">Home</Link>
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
