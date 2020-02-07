module.exports = themeOptions => {
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
      `gatsby-plugin-typescript`
    ]
  };
};
