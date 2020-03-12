import React from "react";

// Components
import { StyledDivWrapper, StyledSpanWrapper, H2 } from "../Common";

// Queries
import useFacts from "../../queries/useFacts";


const Facts = () => {
  const FactsData = useFacts();

  
  return (
    <StyledDivWrapper
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width="50%"
    >
      {FactsData.sort((a, b) => a.node.contentfulid - b.node.contentfulid).map(
        ({ node }, i) => (
          <StyledDivWrapper display="flex" key={i}>
            <H2 as="h4">
              <StyledSpanWrapper margin="0" fontSize="17em" color="blue">
                {node.factNumber}
              </StyledSpanWrapper>
              <StyledSpanWrapper fontSize="9em" padding="0 0 0 1rem">
                {node.factDescription}
              </StyledSpanWrapper>
            </H2>
          </StyledDivWrapper>
        )
      )}
    </StyledDivWrapper>
  );
};

export default Facts;
