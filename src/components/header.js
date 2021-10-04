import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SearchBar from '../components/searchbar'
import { Link } from 'gatsby';

const Header = (props) => {
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
      <SearchBar inputChange={props.inputChange}/>
    </header>
  )
}

export default Header
