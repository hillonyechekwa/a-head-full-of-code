import React from 'react';
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet';

const PostTemplate = ({data, pageContext}) => {
    

    return (
      <section className="post-wrapper">
         <Helmet>
                <meta charSet="utf-8" />
                <title>{data.site.siteMetadata.title}</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
            <header className="post-header">
                <section>
                    <Link className="back-btn" to="/">
                        <FontAwesomeIcon icon={faArrowLeft} size="sm" />
                        back to blog
                    </Link>
                    <p className="tags">
                    {
                        data.graphCmsPost.tags && data.graphCmsPost.tags.join(" ").toLowerCase()
                        }
                    </p>
                <h1>{data.graphCmsPost.title}</h1>
                        <section className="bottom-data">
                <p className="pub-date">Published: {data.graphCmsPost.date}</p>
                <section className="next-prev" >
                {
                    pageContext.nextPost ? (
                <Link to={`/posts/${pageContext.nextPost.slug}`}>
                    <p>Next Post</p>
                    <p>{pageContext.nextPost.title}</p>
                </Link>
                    ) : null
                }
                {
                    pageContext.previousPost ? (
                <Link to={`/posts/${pageContext.previousPost.slug}`}>
                    <p>Previous Post</p>
                    <p>{pageContext.previousPost.title}</p>
                </Link>
                    ): null
                }
               </section>
                </section>
                </section>
                <GatsbyImage image={data.graphCmsPost.coverImage.localFile.childImageSharp.gatsbyImageData} className="post-image" />
            </header>
            <article className="post-content">
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
      tags
      content {
        markdownNode {
          childMdx {
            body
          }
        }
      }
      coverImage {
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              layout: FULL_WIDTH
              formats: WEBP
            )
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        tags
      }
    }
  }
`





