import React, { Children } from "react";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// Components
import {
  StyledSectionWrapper,
  StyledDivWrapper,
  StyledSpanWrapper,
  H2,
  P
} from "../Common";

const GenericBody = ({ bodyData }) => {
  console.log(bodyData);
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        <P fontSize="1.6rem">{children}</P>;
      },
      [BLOCKS.HEADING_2]: (node, Children) => {
        <H2 fontSize="2rem">{Children}</H2>;
      },
      [INLINES.HYPERLINK]: (node, children) => {
        const URL = node.data.uri;
        return (
          <H2 as="a" href={URL} target="_blank">
            {children}
          </H2>
        );
      }
    }
  };

  return (
    <StyledSectionWrapper>
      <StyledDivWrapper as="article">
        {documentToReactComponents(bodyData, options)}
      </StyledDivWrapper>
    </StyledSectionWrapper>
  );
};

export default GenericBody;
