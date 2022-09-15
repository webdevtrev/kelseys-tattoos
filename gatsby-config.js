module.exports = {
  siteMetadata: {
    siteUrl: `https://kelseystattoos.com`,
    title: `Kelsey's Tattoos`,
    description: 'A cool site for Kelsey to recieve bookings on',
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true, // use prettier to format JS code output (default)
        svgo: false, // use svgo to optimize SVGs (default)
        svgoConfig: {
          plugins: [
            { removeViewBox: false }, // remove viewBox when possible (default)
            { cleanupIDs: false }, // remove unused IDs and minify remaining IDs (default)
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `ted7j2ht`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        // token:
        //   'skT3wNKhHjcKlA10rbZA8Bpr49WRyeK1kWBlWL1NMGk1hkPajr0r2gaDF0LluTHZPZnAqIcUFbXniLtR9uSozO5iknkODOagE7AJKmSHR40GnGQlqvM864MbZ2x7Z3YaQ08UEoR5D1rXOkPwB0v8AMETCFJfiNu0M9fm3A85VJGllZV4GtL3',

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/images/favicon.svg',
      },
    },
  ],
};
