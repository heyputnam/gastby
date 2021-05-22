module.exports = {
  siteMetadata: {
    title: "my tutorial site",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `Bebas Neue`
        ],
        display: "swap",
      }
    }
  ],
};
