module.exports = {
  siteMetadata: {
    title: `ATYKOSM`,
    description: `A personal portfolio about wild animal and landscape photography`,
    author: `@larsbehrenberg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logo`,
        path: `${__dirname}/static/logo`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery-images`,
        path: `${__dirname}/static/gallery-assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `static/logo/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
