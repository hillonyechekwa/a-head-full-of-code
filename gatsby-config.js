
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */


require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Code bits and choc-chips`,
    description: `Code bits and choc-chips is a web development blog focused on articles about modern web technologies that include JavaScript, React, GraphQl, Serverless and JAMstack. `,
    editor: `Hill Onyechekwa`,
    socials: {
      twitter: `https://twitter.com/thegridsmith`,
      codepen: `https://codepen.com/hillonyechekwa`,
      github: `https://github.com/hillonyechekwa`,
    },
    tags: ['jamstack', 'frontend', 'javascript', 'serverless']
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path:`${__dirname}/src/images/` 
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layouts/default.js`)
      }
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        buildMarkdownNodes: true,
        downloadLocalImages: true,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 }), require(`autoprefixer`)],
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Josefin Sans']
        }
      }
    }
  ],
}
