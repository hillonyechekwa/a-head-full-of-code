import React from 'react'
import '../styles/compstyles/blogcard.scss'

const BlogCard = () => {
    return (
        <div className="posts-wrapper">
            <img src="#" alt="post-link" />
            <div id="content">
                <h2>Post Title</h2>
                <p>Lorem ipsum dolor sit,
                amet consectetur adipisicing elit.
                Optio, dolor!
                    </p>
            </div>
        </div>
    )
}

export default BlogCard
