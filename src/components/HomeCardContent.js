import React from 'react';
import { Link } from 'gatsby';
import {
  GatsbyImage,
  getImage,
} from "gatsby-plugin-image"



export default function HomeCardContent({ cardData }) {
  const { id, title, slug } = cardData
  const image = cardData.coverImage
  console.log('card data', cardData)
  return (  
  <>
    <h3 className="latest-heading">Latest Posts</h3>
    {cardData.map(({ id, title, slug }) => {
      return (
        <Link className="home-card-cont" key={id} to={slug}>
          {/* <img src={coverImage.url} alt={coverImage.fileName} /> */}
          <GatsbyImage image={image} alt={title} />
          <h4 className="sub1">
            {title}
          </h4>
        </Link>
      );
    })}
      </>
  )
}
