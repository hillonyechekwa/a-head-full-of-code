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
import ReactTooltip from "react-tooltip"

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
            <a data-tip data-for="github-icon" href="https://github.com">
              <FontAwesomeIcon icon={faGithubAlt} size="2x" />
                      </a>
                      <ReactTooltip place="top" id="github-icon" effect="float" type="dark">
                          Github
                      </ReactTooltip>
          </li>
          <li>
            <a data-tip data-for="codepen-icon" href="https://codepen.com">
              <FontAwesomeIcon icon={faCodepen} size="2x" />
                      </a>
                      <ReactTooltip place="top" id="codepen-icon" effect="float" type="dark">
                          Codepen
                      </ReactTooltip>
          </li>
          <li>
            <a data-tip data-for="twitter-icon" href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
                      </a>
                      <ReactTooltip place="top" id="twitter-icon" effect="solid" type="dark">
                          Twitter
                      </ReactTooltip>
          </li>
          <li>
            <a data-tip data-for="facebook-icon" href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <ReactTooltip place="top" id="facebook-icon" effect="solid" type="dark">
                          Facebook
                      </ReactTooltip>
          </li>
          <li>
            <a data-tip data-for="instagram-icon"  href="https://instagram.com">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
                      </a>
                      <ReactTooltip place="top" id="instagram-icon" effect="solid" type="dark">
                          Instagram
                      </ReactTooltip>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BottomInfoCont
