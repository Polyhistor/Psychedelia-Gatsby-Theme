import { graphql, useStaticQuery } from "gatsby";

const useSiteConfigQuery = () => {
  const siteConfigData = useStaticQuery(graphql`
    query {
      allContentfulSiteConfig {
        edges {
          node {
            navigationLabels
          }
        }
      }
    }
  `);

  return siteConfigData.allContentfulSiteConfig.edges;
};

export default useSiteConfigQuery;
