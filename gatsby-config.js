/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata:{
    title: 'Merseyside Dementia Friendly Radio',
    author: 'Matt Wilkie'
  } ,
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto', 'BioRhyme']
        }
      }
    }
  ]
}
