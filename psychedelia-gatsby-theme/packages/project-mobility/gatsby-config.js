// Initialize dotenv
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}` // or '.env'
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-minimal`,
      options: {
        contentful: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          downloadLocal: true
        },
        pageProgress: {
          includePaths: ["/"], 
          height: 3,
          color: `#337AFF`
        }
      }
    }
  ]
};
