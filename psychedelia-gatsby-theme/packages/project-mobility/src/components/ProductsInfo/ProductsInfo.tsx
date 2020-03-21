import React from "react";
import Img from "gatsby-image";

// Components
import { StyledSectionWrapper, StyledDivWrapper, H2, P } from "../Common";

// Helpers
import { theme } from "../../styles/theme";
import { zipObject } from "../../helpers/zipObject";

const ProductsInfo = ({ titles, information }) => {
  const productInfo = zipObject(titles, information[0]);
  const productsInfoArray = [];

  for (let [title, description] of Object.entries(productInfo)) {
    productsInfoArray.push({ title, description });
  }

  console.log(titles.push("p", "barak"));

  return (
    <StyledSectionWrapper padding="0rem 16rem">
      <StyledDivWrapper
        display="grid"
        borderTop={`11px solid ${theme.palePink}`}
      >
        <StyledDivWrapper padding="0 0 0 5rem">
          <StyledDivWrapper>
            {productsInfoArray.map((e, i) => (
              <StyledDivWrapper key={i}>
                <H2
                  as="h3"
                  fontSize="3.5em"
                  borderBottom="1px solid grey"
                  lineHeight="2.5"
                >
                  {e.title}
                </H2>
                <P fontSize="2rem">{e.description}</P>
              </StyledDivWrapper>
            ))}
          </StyledDivWrapper>
          <StyledDivWrapper>
            <H2
              as="h3"
              fontSize="3.5em"
              borderBottom="1px solid grey"
              lineHeight="2.5"
            >
              Product Gallery
            </H2>
            {information[2].map((e, i) => (
              <Img key={i} fluid={e.localFile.childImageSharp.fluid} />
            ))}
          </StyledDivWrapper>
        </StyledDivWrapper>
      </StyledDivWrapper>
    </StyledSectionWrapper>
  );
};

export default ProductsInfo;
