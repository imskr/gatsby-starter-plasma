module.exports = {
  siteMetadata: {
    title: `PLASMA`,
    description: `Kick off your next, great Gatsby project with this plasma starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@imskr`,
    menuLinks: [
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Blog",
        link: "/blog",
      },
      {
        name: "Newsletter",
        link: "/subscribe",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-percy`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-page-progress`,
      options: {
        includePaths: ["/", { regex: "^/blog" }],
        excludePaths: [],
        height: 3,
        prependToBody: false,
        color: `#64ffda`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#64ffda`,
        theme_color: `#64ffda`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
