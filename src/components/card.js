import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'


const Card = ({ content }) => {
    // add logic to set state to color prop passed down into the component
    console.log('content', content)
    return (
        <section className="card">
            {/* <Link to={`/post/${content.slug}`}> */}
                <h3>{content.title}</h3>
                <p>{content.excerpt}</p>
            {/* </Link> */}
        </section>
    )
}

export default Card
