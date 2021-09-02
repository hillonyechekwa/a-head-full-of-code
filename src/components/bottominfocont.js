import React from "react"
import Avatar from "./svgs/avatar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faGithubAlt, faCodepen, faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

const BottomInfoCont = () => {
  return (
    <>
      <Avatar />
      <h2>Say Hello 👋</h2>
      <p className="body1">
        if you have conversations on certain topics to converse about or you
        just want to see my projects click any of the links to my other
        platforms below.
      </p>
      <ul>
        <li>
                  <a href="">
                      <FontAwesomeIcon icon={faGithubAlt} />
          </a>
        </li>
        <li>
                  <a href="">
                      <FontAwesomeIcon icon={faCodepen} />
          </a>
        </li>
        <li>
                  <a href="">
                      <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
                  <a href="">
                      <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
                  <a href="">
                      <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </>
  )
}

export default BottomInfoCont
