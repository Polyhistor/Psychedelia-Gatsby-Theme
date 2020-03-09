import React, { Fragment } from "react";
import Img from "gatsby-image";

// Components
import { StyledDivWrapper, H2, P } from "../Common";

const FeatureBox = ({ title, subtitle, description, banner, direction }) => {
  console.log(direction);
  return (
    <Fragment>
      <StyledDivWrapper
        display="grid"
        gridColumns="50% 50%"
        gridColumnGap="8.6rem"
        direction={direction}
        margin="8rem 0"
      >
        <StyledDivWrapper
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <H2 fontSize="9.3rem" lineHeight="1" margin="0" direction={direction}>
            {title}
          </H2>
          <H2
            fontSize="3.8rem"
            as="h3"
            color="blue"
            margin="3rem 0 0.3rem 0"
            direction={direction}
          >
            {subtitle}
          </H2>
          <P fontSize="1.6rem" margin="0.5rem 0 0 0" direction={direction}>
            {description}
          </P>
        </StyledDivWrapper>
        <StyledDivWrapper>
          <Img fluid={banner}></Img>
        </StyledDivWrapper>
      </StyledDivWrapper>
    </Fragment>
  );
};

export default FeatureBox;
