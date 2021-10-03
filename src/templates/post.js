import React from 'react';
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const PostTemplate = ({data, pageContext}) => {
    
    console.log('data', data)
    console.log(pageContext)

    return (
        <section>
            <header className="post-header">
                <h1>{data.graphCmsPost.title}</h1>

                <p>{data.graphCmsPost.date}</p>
                {
                    pageContext.nextPost ? (
                <Link to={`/posts/${pageContext.nextPost.slug}`}>
                    <p>next post</p>
                    <p>{pageContext.nextPost.title}</p>
                </Link>
                    ) : null
                }
                {
                    pageContext.previousPost ? (
                <Link to={`/posts/${pageContext.previousPost.slug}`}>
                    <p>previous post</p>
                    <p>{pageContext.previousPost.title}</p>
                </Link>
                    ): null
                }
               
                <Link to="/">
                    <FontAwesomeIcon icon={faArrowLeft} size="sm" />
                    back to blog
                </Link>
            </header>
            <article>
            {
                data.graphCmsPost.content ? (
                    <MDXRenderer>{data.graphCmsPost.content.markdownNode.childMdx.body}</MDXRenderer>
                ) : null
            }
             </article>
        </section>
    )
}

export default PostTemplate


export const query = graphql`
  query($slug: String) {
    graphCmsPost(slug: { eq: $slug }) {
      id
      title
      date
      content {
        markdownNode {
          childMdx {
            body
          }
        }
      }
    }
  }
`




