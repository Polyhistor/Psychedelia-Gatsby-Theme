import { graphql } from "gatsby";

export const ProductsFragment = graphql`
  fragment Products on ContentfulProducts {
    productTitle
    productSubtitle
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
    productSpecification
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
`;

export const GenericFragment = graphql`
  fragment Generic on ContentfulGeneric {
    slug
    title
    subtitle
    banner {
      localFile {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    description {
      json
    }
  }
`;
