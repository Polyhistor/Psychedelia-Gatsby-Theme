// Initialize dotenv
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}` // or '.env'
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-minimal`,
      resolve: `gatsby-plugin-tawk`,
      options: {
        tawkId: "5e803d3435bcbb0c9aab7e21",
      },
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
        }, 
        manifest: {
          name: "Mobility Aids New Zealand",
          shortName: "Mobility Aids",
          backgroundColor: "white",
          themeColor: "#337AFF",
          icon: "src/images/mobility_aids_favicon.svg"
        }
      }
    }
  ]
};
