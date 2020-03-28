import React from "react";
import Img from "gatsby-image";

import { StyledDivWrapper, H2, P } from "../Common";

const CategoryBox = ({ title, description, banner }) => {
  return (
    <StyledDivWrapper
      padding="2rem"
      hover="scale"
      borderTop="11px solid #ECDBDF"
    >
      <H2 margin="3rem 0rem" fontSize="9.5em" borderBottom="11px solid #FCFCFC">
        {title}
      </H2>
      <P fontSize="1.6rem">{description}</P>
      {banner && <Img fluid={banner} alt={title}></Img>}
    </StyledDivWrapper>
  );
};

export default CategoryBox;
