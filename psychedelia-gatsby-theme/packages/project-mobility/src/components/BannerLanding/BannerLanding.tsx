import React from "react";

// Components
import {
  StyledSectionWrapper,
  StyledDivWrapper,
  StyledImage,
  StyledButtonPrimary,
  H1,
  H2
} from "../Common";

// Queries
import useLandingBanner from "../../queries/useLandingBanner";

const BannerLanding = () => {
  const landingBannerData = useLandingBanner();

  console.log(landingBannerData);

  return (
    <StyledSectionWrapper>
      <StyledDivWrapper
        margin="5rem 24rem;"
        display="grid"
        gridColumns="50% 50%"
      >
        <StyledDivWrapper margin="0rem 2rem 0rem 0rem">
          <H1 fontSize="6rem" maxWidth="50rem" lineHeight="6rem" margin="0">
            {landingBannerData.title}
          </H1>
          <H2
            fontSize="2rem"
            maxWidth="57rem"
            fontWeight="300"
            margin="5rem 0"
            padding="1.5rem 0"
            borderTop="1px solid gray"
            borderBottom="1px solid gray"
            borderRadius="0 0.6rem 0.6rem 0"
          >
            {landingBannerData.subtitle.subtitle}
          </H2>
          <StyledButtonPrimary>
            {landingBannerData.callToAction}
          </StyledButtonPrimary>
        </StyledDivWrapper>
        <StyledDivWrapper>
          <StyledImage
            url={
              landingBannerData.banner.localFile.childImageSharp.fluid.srcWebp
            }
            borderRadius="0.4rem"
          ></StyledImage>
        </StyledDivWrapper>
      </StyledDivWrapper>
    </StyledSectionWrapper>
  );
};

export default BannerLanding;
