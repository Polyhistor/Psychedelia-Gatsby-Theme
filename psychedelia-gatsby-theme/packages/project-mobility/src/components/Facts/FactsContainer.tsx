import React from "react";

//Components
import Facts from "./Facts";
import {
  StyledSectionWrapper,
  StyledDivWrapper,
  H2
} from "../Common";

// Queries
import useSiteConfigQuery from "../../queries/useSiteConfigQuery"

// Helpers
import { theme } from '../../styles/theme';

const FactsContainer = () => {
  const factsLabel = useSiteConfigQuery()[0].node.factsLabel

  return (
    <StyledSectionWrapper padding="0 10rem">
    <StyledDivWrapper display="flex" borderTop={`11px solid ${theme.palePink}`}>
      <Facts></Facts>
      <StyledDivWrapper border="thick-bordered" display="flxe" justifyContent="center" width="50%">
        <H2 fontSize="10em"  margin="0 0 0 5rem" display="flex" alignItems="center">
          {factsLabel}
        </H2>
      </StyledDivWrapper>
    </StyledDivWrapper>
  </StyledSectionWrapper>
  )

}

export default FactsContainer;
