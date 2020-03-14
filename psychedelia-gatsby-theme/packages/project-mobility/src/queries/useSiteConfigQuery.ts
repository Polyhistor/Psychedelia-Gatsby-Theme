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
            logo {
              file {
                url
              }
            }
            factsLabel
            footerLabels {
              label 
              link
              subs {
                label 
                link
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
