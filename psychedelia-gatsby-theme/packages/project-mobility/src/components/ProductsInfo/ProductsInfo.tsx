import React from "react";
import Img from "gatsby-image";
import { Link, Element, animateScroll as scroll } from "react-scroll";

// Components
import {
  StyledSectionWrapper,
  StyledDivWrapper,
  StyledSpanWrapper,
  H2,
  P
} from "../Common";

// Helpers
import { theme } from "../../styles/theme";
import { zipObject } from "../../helpers/zipObject";

const ProductsInfo = ({ titles, information }) => {
  const productInfo = zipObject(titles, information[0]);
  const productsInfoArray = [];

  for (let [title, description] of Object.entries(productInfo)) {
    productsInfoArray.push({ title, description });
  }

  console.log(productsInfoArray);

  return (
    <StyledSectionWrapper padding="0rem 16rem">
      <StyledDivWrapper
        display="grid"
        gridTemplateColumns="30% 70%"
        padding="8rem"
        borderTop={`11px solid ${theme.palePink}`}
      >
        <StyledDivWrapper borderRight="1px solid gray">
          <StyledDivWrapper position="sticky" top="10rem">
            {titles.map((title, i) => (
              <Link
                activeClass="test"
                to={`${i}`}
                spy={true}
                smooth={true}
                duration={500}
                offset={70}
                key={i}
              >
                <StyledSpanWrapper
                  fontSize="3.5em"
                  borderBottom="1px solid grey"
                  lineHeight="2.5"
                  as="h4"
                >
                  {title}
                </StyledSpanWrapper>
              </Link>
            ))}
          </StyledDivWrapper>
        </StyledDivWrapper>
        <StyledDivWrapper padding="0 0 0 5rem">
          <StyledDivWrapper>
            {productsInfoArray.map((e, i) => (
              <StyledDivWrapper key={i}>
                <Element>
                  <H2
                    as="h3"
                    fontSize="3.5em"
                    borderBottom="1px solid grey"
                    lineHeight="2.5"
                  >
                    {e.title}
                  </H2>
                  <P id={`${i}`} fontSize="2rem">
                    {e.description}
                  </P>
                </Element>
              </StyledDivWrapper>
            ))}

            {/* {information[0].map((e, i) => (
              <StyledDivWrapper key={i}>
                <Element>
                  <P id={`${i}`} fontSize="2rem">
                    {e}
                  </P>
                </Element>
              </StyledDivWrapper>
            ))} */}
          </StyledDivWrapper>
          <StyledDivWrapper>
            {information[1].map((e, i) => (
              <Img key={i} fluid={e.localFile.childImageSharp.fluid} />
            ))}
          </StyledDivWrapper>
        </StyledDivWrapper>
      </StyledDivWrapper>
    </StyledSectionWrapper>
  );
};

export default ProductsInfo;
