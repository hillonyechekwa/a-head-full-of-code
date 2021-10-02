const path = require('path')


exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const postComponent = path.resolve('./src/templates/post.js')
    
    const { data } = await graphql(`
        query postQuery {
  allGraphCmsPost {
    edges {
      node {
        title
        slug
      }
    }
  }
}
    `)
    if (data.error) throw data.error
    data.allGraphCmsPost.edges.forEach(edge => {
        const slug = edge.node.slug
        createPage({
            path: slug,
            component: postComponent,
            context: {
                slug: slug
            }
        })
    })
}
