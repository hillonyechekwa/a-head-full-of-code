import React from 'react'
import '../styles/compstyles/card.scss'

const Card = () => {
    return (
        <div className="posts">
            <img src="#" alt="post-thumbnail" />
            <div className="content">
                <h2>Post title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reprehenderit.</p>
            </div>
        </div>
    )
}

export default Card
