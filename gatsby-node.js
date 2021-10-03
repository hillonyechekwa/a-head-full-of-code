const path = require("path")
const {createFilePath} = require('gatsby-source-filesystem')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const postComponent = path.resolve("./src/templates/post.js")

  const { data } = await graphql(`
    {
      post: allGraphCmsPost(sort: { fields: date, order: DESC }) {
        edges {
          nextPost: next {
            title
            slug
          }
          page: node {
            id
            title
            slug
          }
          previousPost: previous {
            title
            slug
          }
        }
      }
    }
  `)

  if (data.errors) throw data.errors
  data.post.edges.forEach(({ nextPost, page, previousPost }) => {
    createPage({
      path: `/posts/${page.slug}`,
      component: postComponent,
      context: {
        slug: page.slug,
        previousPost,
        nextPost
      },
    })
  })

  // exports.onCreateNode = ({ node, actions, getNode }) => {
  //   const { createNodeField } = actions
  //   const value = createFilePath({node, getNode})
  //   createNodeField({
  //     name: `slug`,
  //     node,
  //     value
  //   })
  // }
}
