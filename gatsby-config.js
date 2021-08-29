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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/`,
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layouts/mainlayout.js`)
      }
    },
    // {
    //   resolve: 'gatsby-source-graphcms',
    //   options: {
    //     endpoint: process.env.GRAPHCMS_ENDPOINT,
    //   },
    // },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 }), require(`autoprefixer`)],
      },
    },
  ],
}
