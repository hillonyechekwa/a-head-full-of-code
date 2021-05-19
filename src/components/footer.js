import React from 'react'
import '../styles/compstyles/footer.scss'

const Footer = () => {
    return (
        <footer>
            <section className="links">
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Newsletter</li>
                    <li>WebKraft</li>
                </ul>
            </section>
            <section className="author-bio">
                <img src="#" alt="bio-thumb" />
                <p className="bio">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eum minus voluptate explicabo quam et voluptatum nihil reiciendis perspiciatis?
                    Iusto id voluptates laboriosam vitae provident, ipsum tempore praesentium possimus aliquam,
                    totam dicta placeat libero, eaque animi quidem molestiae porro assumenda natus.
                </p>
            </section>
            <p id="copyr">&copy;2021|<span>aheadfullofcode</span></p>
        </footer>
    )
}

export default Footer
