import React from "react"
import Header from "../components/header"
import Card from "../components/card"
import { useStaticQuery, graphql, Link } from "gatsby"
import ContentInfo from "../components/contentinfo"

const Index = () => {
  const data = useStaticQuery(graphql`
    query blogQuery {
      allGraphCmsPost {
        edges {
          node {
            id
            title
            tags
            slug
            excerpt
          }
        }
      }
    }

  `)

  const blogData = data.allGraphCmsPost.edges
 
  return (
    <>
      <Header />
      <section className="blog-card--wrapper">
        <h2>Latest Posts</h2>
        {blogData.map(({ node }) => (
          <Link key={`${node.title}`} to={`/post/${node.slug}`}>
            <Card content={node} />
          </Link>
        ))}
      </section>
      <ContentInfo/>
    </>
  )
}

export default Index
