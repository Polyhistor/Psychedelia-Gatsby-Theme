import React from "react";
import Img from "gatsby-image";

// Components
import {
  StyledSectionWrapper,
  StyledDivWrapper,
  H1,
} from "../Common";

const BannerProducts = ({ title, banner }) => {
  return (
    <StyledSectionWrapper padding="0 16rem" margin="10rem 0 0 0">
      <StyledDivWrapper display="grid" gridTemplateColumns="50% 50%">
        <StyledDivWrapper>
          <H1 fontSize="10rem" lineHeight="1">{title}</H1>
        </StyledDivWrapper>
        <StyledDivWrapper display="sticky" top="0">
          <Img fluid={banner}></Img>
        </StyledDivWrapper>
      </StyledDivWrapper>
    </StyledSectionWrapper>
  );
};

export default BannerProducts;
