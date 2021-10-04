import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'


const Card = ({content}) => {

    // add logic to set state to color prop passed down into the component
    return (
        <section className="card">
            <GatsbyImage image={content.coverImage.localFile.childImageSharp.gatsbyImageData} className="blog-image" />
            <section className="blog-post-content">
                <h3>{content.title}</h3>
            <p>{content.excerpt.toLowerCase()}</p>
            {
               content.tags && content.tags.join(" ").toLowerCase()
                }
                </section>
        </section>
    )
}

export default Card
