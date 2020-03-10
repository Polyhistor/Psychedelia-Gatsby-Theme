import React from "react";

//Components
import Facts from "./Facts";
import {
  StyledSectionWrapper,
  StyledDivWrapper,
  StyledSpanWrapper,
  H2
} from "../Common";

const FactsContainer = () => (
  <StyledSectionWrapper padding="0 10rem">
    <StyledDivWrapper display="flex">
      <Facts></Facts>
      <StyledDivWrapper display="flxe" justifyContent="center">
        <H2 fontSize="16rem" border="11px solid #FCFCFC;" margin="0 0 0 5rem">
          Sold To Date!
        </H2>
      </StyledDivWrapper>
    </StyledDivWrapper>
  </StyledSectionWrapper>
);

export default FactsContainer;
