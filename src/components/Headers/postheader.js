import React from 'react'

const PostHeader = () => {
    return (
        <div>
            <section className="post-image">
                <h2>Post Image</h2>
            </section>
            <section>
                <h1 className="post-title">Title</h1>
                <p id="post-excerpt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, dolor?</p>
                <p id="post-date">post date</p>
                <ul className="tags">
                    <li>tag1</li>
                    <li>tag2</li>
                    <li>tag3</li>
                </ul>
            </section>
        </div>
    )
}

export default PostHeader
