import React, {useState, useEffect} from "react"
import { Link } from "gatsby"


const Navigation = () => {

  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    //FIXME: make this logic make sense it's trash rn
    const changeBgOnScroll = () => {
      if (window.scrollY >= 80) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }

    window.addEventListener('scroll', changeBgOnScroll)
  },[navbar])


//TODO: add a shadow at the bottom of the navbar when the scroll offset function kicks in. 

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link className="nav-links" to="/">Home</Link>
        </li>
        <li>
          <Link className="nav-links" to="/About">About</Link>
        </li>
        <li>
          <a className="nav-links" href="https://buymeacoffee.com/blackchocoder">Buy Me A Coffee</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
