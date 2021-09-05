import React from 'react';
import { Link } from 'gatsby';




export default function HomeCardContent({ cardData }) {
  const { id, title, slug, coverImage } = cardData
  console.log('cardData', cardData)
  return (  
  <>
    <h3 className="latest-heading">Latest Posts</h3>
    {cardData.map(({ id, title, slug, coverImage }) => {
      return (
        <Link className="home-card-cont" key={id} to={slug}>
          {/* <img src={coverImage.url} alt={coverImage.fileName} /> */}
          <img src={coverImage.url} alt={title} />
          <h4 className="sub1">
            {title}
          </h4>
        </Link>
      );
    })}
      </>
  )
}
