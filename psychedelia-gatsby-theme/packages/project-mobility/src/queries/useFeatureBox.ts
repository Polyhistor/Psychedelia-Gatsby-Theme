import { graphql, useStaticQuery } from "gatsby";

const useFeatureBox = () => {
  const FeatureBoxData = useStaticQuery(graphql`
    query {
      allContentfulFeatureBox {
        edges {
          node {
            title
            subtitle
            description {
              description
            }
            banner {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return FeatureBoxData.allContentfulFeatureBox.edges;
};

export default useFeatureBox;
