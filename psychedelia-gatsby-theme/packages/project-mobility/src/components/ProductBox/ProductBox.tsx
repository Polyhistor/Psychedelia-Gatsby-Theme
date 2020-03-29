import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

// Components
import { StyledDivWrapper, StyledSpanWrapper } from "../Common";

// Helpers
import { theme } from "../../styles/theme";

const ProductBox = ({ title, price, banner, slug }) => (
  <Link style={{ textDecoration: "none" }} to={slug}>
    <StyledDivWrapper
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      border={`1px solid ${theme.queenPink}`}
      borderRadius="8px"
      padding="1rem"
    >
      <StyledSpanWrapper fontSize="3em" textAlign="center" color="black">
        {title}
      </StyledSpanWrapper>
      <StyledSpanWrapper fontSize="3.5em" fontWeight="600" color="blue">
        {price}
      </StyledSpanWrapper>
      <Img style={{ width: "100%" }} fluid={banner} alt={title}></Img>
    </StyledDivWrapper>
  </Link>
);

export default ProductBox;
