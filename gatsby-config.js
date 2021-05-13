/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config()


module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `A Head Full Of Code`,
    description: `A Web Development blog`,
    editor: `Hill Onyechekwa`,
    socials: {
      twitter: `https://twitter.com/thegridsmith`,
      codepen: `https://codepen.com/hillonyechekwa`,
      github: `https://github.com/hillonyechekwa`,
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
      {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 }), require(`autoprefixer`)],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layouts/mainlayout.js`)
      }
    },
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/`,
      }
    }
  ],
}
