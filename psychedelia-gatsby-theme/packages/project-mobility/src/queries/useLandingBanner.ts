import { graphql, useStaticQuery } from "gatsby";

const useLandingBanner = () => {
  const LandingBannerData = useStaticQuery(graphql`
    query {
      contentfulLandingBanner {
        title
        subtitle {
          subtitle
        }
        callToAction
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
  `);

  return LandingBannerData.contentfulLandingBanner;
};

export default useLandingBanner;
