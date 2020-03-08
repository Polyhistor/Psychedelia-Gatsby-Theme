import {graphql, useStaticQuery} from "gatsby"

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
    `)
}