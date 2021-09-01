import React from 'react';
import { Link } from 'gatsby';



export default function HomeCardContent({ cardData }) {
  console.log('cardData', cardData)
  return (  
  <>
    <h3 className="latest-heading">Latest Posts</h3>
    {cardData.map(data => {
      return (
        <Link className="home-card-cont" key={data.id} to={data.slug}>
          <img src={data.image} alt={data.image} />
          <h4 className="sub1">
            {data.title}
          </h4>
        </Link>
      );
    })}
      </>
  )
}
