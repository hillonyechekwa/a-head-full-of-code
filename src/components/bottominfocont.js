import React from "react"
import Avatar from "./svgs/avatar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faGithubAlt,
  faCodepen,
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const BottomInfoCont = () => {
  return (
    <div className="content-wrap">
      <Avatar />
      <div>
        <h2>Say Hello 👋🏾</h2>
        <p className="body1">
          if you have conversations on certain topics to converse about or you
          just want to see my projects click any of the links to my other
          platforms below.
        </p>
        <ul>
          <li>
            <a href="https://github.com">
              <FontAwesomeIcon icon={faGithubAlt} size="2x"/>
            </a>
          </li>
          <li>
            <a href="https://codepen.com">
              <FontAwesomeIcon icon={faCodepen} size="2x"/>
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} size="2x"/>
            </a>
          </li>
          <li>
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebook} size="2x"/>
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BottomInfoCont
