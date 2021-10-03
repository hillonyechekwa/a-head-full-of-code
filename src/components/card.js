import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'


const Card = ({ content }) => {
    // add logic to set state to color prop passed down into the component
    return (
        <section className="card">
                <h3>{content.title}</h3>
                <p>{content.excerpt}</p>
        </section>
    )
}

export default Card
