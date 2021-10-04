import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'


const Card = ({content}) => {

    // add logic to set state to color prop passed down into the component
    return (
        <section className="card">
                <h3>{content.title}</h3>
            <p>{content.excerpt.toLowerCase()}</p>
            {
               content.tags && content.tags.join(" ").toLowerCase()
            }
        </section>
    )
}

export default Card
