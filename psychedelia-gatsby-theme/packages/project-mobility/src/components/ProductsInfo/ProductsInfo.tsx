import React from "react";
import Img from "gatsby-image";

// Components
import {
  StyledSectionWrapper,
  StyledDivWrapper,
  StyledSpanWrapper,
  H2,
  P
} from "../Common";
import { StyledUlList, StyledLiList } from "../Navigation/Navigation.styled";

// Helpers
import { theme } from "../../styles/theme";
import { zipObject } from "../../helpers/zipObject";

const ProductsInfo = ({ titles, information }) => {
  const productInfo = zipObject(titles, information[0]);
  const productsInfoArray = [];

  for (let [title, description] of Object.entries(productInfo)) {
    productsInfoArray.push({ title, description });
  }

  // TODO - type CHECK THINGS AND MAKE THEM CLEANER, modular, this is just aan easy fix for the object issues
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
                <H2 as="h3" fontSize="7em" lineHeight="1.5">
                  {e.title}
                </H2>
                <P fontSize="2rem">{e.description}</P>
              </StyledDivWrapper>
            ))}
          </StyledDivWrapper>
          <StyledDivWrapper>
            <H2 as="h3" fontSize="7em" lineHeight="2.5">
              Product Specificaton
            </H2>
            <StyledUlList display="flex" direction="column">
              {information[1].map((e, i) => (
                <StyledLiList key={i} listStyle="inside">
                  {e}
                </StyledLiList>
              ))}
            </StyledUlList>
          </StyledDivWrapper>
          <StyledDivWrapper>
            <H2 as="h3" fontSize="7em" lineHeight="2.5">
              Price List
            </H2>
            {information[2].map((e, i) => (
              <StyledDivWrapper
                key={i}
                width="50%"
                display="grid"
                gridTemplateColumns="33% 20% 33%"
              >
                <StyledSpanWrapper
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  textTransform="capitalize"
                  fontSize="4.5em"
                  lineHeight="2.5"
               
                >
                  {e.label}
                </StyledSpanWrapper>
                <StyledSpanWrapper
                  fontSize="6em"
                  fontWeight="600"
                  lineHeight="2.5"
                  display="flex"
                  justifyContent="center"
                  color="blue"
                >
                  &#8594;
                </StyledSpanWrapper>
                <StyledSpanWrapper
                  fontSize="6em"
                  fontWeight="600"
                  lineHeight="2.5"
                  display="flex"
                  justifyContent="center"
                  color="blue"
                >
                  {e.price}
                </StyledSpanWrapper>
              </StyledDivWrapper>
            ))}
          </StyledDivWrapper>
          <StyledDivWrapper>
            <H2 as="h3" fontSize="7em" lineHeight="2.5">
              Product Gallery
            </H2>
            <StyledDivWrapper
              display="grid"
              gridGap="10px"
              gridTemplateColumns="33% 33% 33%"
              margin="0 0 8rem 0"
            >
              {information[3].map((e, i) => (
                <Img
                  style={{ border: "1px solid #ECDBDF" }}
                  key={i}
                  fluid={e.localFile.childImageSharp.fluid}
                />
              ))}
            </StyledDivWrapper>
          </StyledDivWrapper>
        </StyledDivWrapper>
      </StyledDivWrapper>
    </StyledSectionWrapper>
  );
};

export default ProductsInfo;
