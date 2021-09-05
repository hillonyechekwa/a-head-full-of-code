import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "../components/card"
import { Link } from 'gatsby';

const Header = () => {
  const herodata = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
          tags
        }
      }
    }
  `)

  const { title, description, tags } = herodata.site.siteMetadata

  return (
    <header className="hero">
      <h1>{title}</h1>
      <p className="text1">{description}</p>
      <div className="tags-container">
        {tags.map(tag => (
          <Card
            key={tag}
            content={tag}
            className="card-small card-small--hoz"
          />
        ))}
      </div>
    </header>
  )
}

export default Header
