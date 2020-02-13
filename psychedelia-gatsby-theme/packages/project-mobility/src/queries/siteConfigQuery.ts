import { graphql, useStaticQuery } from "gatsby";

const useSiteConfigQuery = () => {
  const siteConfigData = useStaticQuery(graphql`
    query {
      allContentfulSiteConfig {
        edges {
          node {
            navigationLabels {
              internal {
                content
              }
            }
          }
        }
      }
    }
  `);

  return siteConfigData.allContentfulSiteConfig.edges;
};

export default useSiteConfigQuery;
