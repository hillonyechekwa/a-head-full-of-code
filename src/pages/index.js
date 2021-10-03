import React from "react"
import Header from "../components/header"
import Card from "../components/card"
import { graphql, Link } from "gatsby"
import ContentInfo from "../components/contentinfo"

const Index = ({data}) => {
 
  return (
    <>
      <Header />
      <section className="blog-card--wrapper">
        <h2>Latest Posts</h2>
        {data.allGraphCmsPost.nodes.map((post) => (
          // console.log(post.id)
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


export  const data = graphql`
     {
      allGraphCmsPost(sort: {fields: date, order: DESC}) {
          nodes {
            id
            title
            tags
            slug
            excerpt
        }
      }
    }
  `
