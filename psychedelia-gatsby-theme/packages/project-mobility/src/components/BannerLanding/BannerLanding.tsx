import React from "react";
import Img from "gatsby-image";

// Components
import {
  StyledSectionWrapper,
  StyledDivWrapper,
  StyledButtonPrimary,
  H1,
  H2
} from "../Common";

// Queries
import useLandingBanner from "../../queries/useLandingBanner";

const BannerLanding = () => {
  const landingBannerData = useLandingBanner();

  return (
    <StyledSectionWrapper margin="5rem 0 0 0" padding="0 16em">
      <StyledDivWrapper display="grid" gridColumns="50% 50%" zIndex="-1">
        <StyledDivWrapper margin="0rem 2rem 0rem 0rem" display="flex" flexDirection="column" justifyContent="center">
          <H1 fontSize="9.5em" lineHeight="1em" margin="0">
            {landingBannerData.title}
          </H1>
          <H2
            fontSize="2rem"
            maxWidth="57rem" fontWeight="300"
            padding="1.5rem 0"
          >
            {landingBannerData.subtitle.subtitle}
          </H2>
          <StyledButtonPrimary>
            {landingBannerData.callToAction}
          </StyledButtonPrimary>
        </StyledDivWrapper>
        <StyledDivWrapper>
          <Img
            fluid={landingBannerData.banner.localFile.childImageSharp.fluid}
            alt="New Zealand Mobility Aid"
          ></Img>
        </StyledDivWrapper>
      </StyledDivWrapper>
    </StyledSectionWrapper>
  );
};

export default BannerLanding;
