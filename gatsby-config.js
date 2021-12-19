/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Daniela Herrera',
    description: 'Portafolio',

  },
  plugins: [
    //`gatsby-source-filesystem`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    `gatsby-wordpress-search`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://dev-danielas-portfolio.pantheonsite.io/graphql`,
        //includedRoutes: ["https://dev-danielas-portfolio.pantheonsite.io/wp-json/wp/v2/searchResults"],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    }
  ],
}
