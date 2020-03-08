import { graphql, useStaticQuery } from "gatsby";

const useCategoryBox = () => {
  const CategoryBoxData = useStaticQuery(graphql`
    query {
      allContentfulCategoryBox {
        edges {
          node {
            title
            description
            banner {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 100) {
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

  return CategoryBoxData.allContentfulCategoryBox.edges;
};

export default useCategoryBox;
