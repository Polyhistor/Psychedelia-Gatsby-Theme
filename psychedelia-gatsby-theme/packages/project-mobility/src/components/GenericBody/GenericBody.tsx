import React from "react";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// Components
import { StyledSectionWrapper, StyledDivWrapper, H2, P } from "../Common";

// Helpers
import {theme} from "../../styles/theme"

const GenericBody = ({ bodyData }) => {
 
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <P fontSize="1.6rem">{children}</P>
      ),
      [BLOCKS.HEADING_2]: (node, Children) => (
        <H2 fontSize="2rem" color="blue">{Children}</H2>
      ),
      [INLINES.HYPERLINK]: (node, children) => {
        const URL = node.data.uri;
        return (
          <H2 as="a" href={URL} color="blue"  textDecoration="none" target="_blank">
            {children}
          </H2>
        );
      }
    }
  };

  return (
    <StyledSectionWrapper padding="0 10rem">
      <StyledDivWrapper as="article">
        {documentToReactComponents(bodyData.json, options)}
      </StyledDivWrapper>
    </StyledSectionWrapper>
  );
};

export default GenericBody;
