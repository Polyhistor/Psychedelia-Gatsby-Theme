import {graphql} from "gatsby"

export const ProductsFragment = graphql`
    fragment Products on ContentfulProducts {
        productTitle
        productBannerImage {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        productDescription {
          productDescription
        }
        productSpecification {
          productSpecification
        }
        productDimension {
          productDimension
        }
        priceList {
          price 
          label
        }
        gallery {
            localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
    }
`