import React from 'react'
import '../../styles/compstyles/postheader.scss'

const PostHeader = () => {
    return (
        <header className="post-header">
            <section id="post-image-wrapper">
                <img src="#" alt="blog-post" />
            </section>
            <section id="post-details">
                <h1 className="post-title">Title</h1>
                <p id="post-excerpt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, dolor?</p>
                <div id="dateandtags">
                    <p id="post-date">post date</p>
                    <ul className="tags">
                        <li>tag1</li>
                        <li>tag2</li>
                        <li>tag3</li>
                    </ul>
                </div>
            </section>
        </header>
    )
}

export default PostHeader
