module.exports = themeOptions => {
  console.log(themeOptions)
  return {
    plugins: [
      `gatsby-plugin-remove-trailing-slashes`,
      `gatsby-plugin-playground`,
      `gatsby-plugin-preload-fonts`,
      `gatsby-plugin-breadcrumb`,
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-polyfill-io`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-typescript`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: themeOptions.contentful.spaceId,
          accessToken: themeOptions.contentful.accessToken,
          downloadLocal: themeOptions.contentful.downloadLocal, 
        }
      },
      {
        resolve: "gatsby-plugin-page-progress",
        options: {
          includePaths: themeOptions.pageProgress.includePaths,
          height: themeOptions.pageProgress.includePaths,
          color: themeOptions.pageProgress.color
        }
      }
    ]
  };
};
