import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SearchBar from '../components/searchbar'

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
      <h4 className="sub2 hero-description">{description}</h4>
      {/* {
        tags && tags.join(" ")
      } */}
      <SearchBar inputChange={props.inputChange}/>
    </header>
  )
}

export default Header
