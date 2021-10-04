import React, { useState } from "react"
import Header from "../components/header"
import Card from "../components/card"
import { graphql, Link } from "gatsby"
import ContentInfo from "../components/contentinfo"

const Index = (props) => {
  const {data} = props
  const allPosts = data.allGraphCmsPost.nodes
  const emptyQuery = ""
  const [searchChange, setSearchChange] = useState({
    filterdData: [],
    query: emptyQuery,
  })


  const handleInputChange = event => {
    const query = event.target.value
    const { data } = props
    // didn't destructure data from props
    // I've destructured data as a prameter already

    //get all posts
    const posts = data.allGraphCmsPost.nodes || []
    //return all filtered posts
    const filteredData = posts.filter(post => {
      //destructure data from post fontmatter
      const { title, excerpt, tags } = post
      return (
        //standardize data with .toLowerCase
        //return true if the excerpt title or tags
        //contains the query string
        excerpt.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join(" ").toLowerCase().includes(query.toLowerCase()))
      )
    })

    //update state according to latest query and results
    setSearchChange({
      query, //with current query string from the 'Input' event
      filteredData, // with filtered data from posts.filter(post =>(//filteredData)) above
    })
  }
  const { filteredData, query } = searchChange
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts


  return (
    <>
      <Header inputChange={handleInputChange}/>
        <section className="blog-card--wrapper">
          <h2>Latest Posts</h2>
          {posts.map(post => (
            <Link key={post.title} to={`/posts/${post.slug}`}>
              <Card content={post} />
            </Link>
          ))}
        </section>
        <ContentInfo />
    </>
  )
}

export default Index

export const data = graphql`
  {
    allGraphCmsPost(sort: { fields: date, order: DESC }) {
      nodes {
        id
        title
        tags
        slug
        excerpt
        coverImage {
          localFile {
          childImageSharp {
            gatsbyImageData(
              width: 150
              placeholder: TRACED_SVG
              layout: CONSTRAINED
              formats: WEBP
            )
          }
        }
        }
      }
    }
  }
`
