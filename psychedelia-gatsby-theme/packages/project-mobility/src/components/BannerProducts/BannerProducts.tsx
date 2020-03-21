import React from "react";
import Img from "gatsby-image";

// Components
import { StyledSectionWrapper, StyledDivWrapper, H1, H2 } from "../Common";

// TODO - RENAME THIS COMPONnent to something more generic
const BannerProducts = ({ title, subtitle, banner }) => {
  return (
    <StyledSectionWrapper padding="10rem 16rem 3rem 10rem">
      <StyledDivWrapper display="grid" gridTemplateColumns="50% 50%">
        <StyledDivWrapper>
          <H1 fontSize="10rem" lineHeight="1" margin="0.7em 0 0.3em 0;">
            {title}
          </H1>
          <H2 color="blue" fontSize="6rem" lineHeight="1" margin="0">
            {subtitle}
          </H2>
        </StyledDivWrapper>
        <StyledDivWrapper display="sticky" top="0">
          <Img fluid={banner}></Img>
        </StyledDivWrapper>
      </StyledDivWrapper>
    </StyledSectionWrapper>
  );
};

export default BannerProducts;
