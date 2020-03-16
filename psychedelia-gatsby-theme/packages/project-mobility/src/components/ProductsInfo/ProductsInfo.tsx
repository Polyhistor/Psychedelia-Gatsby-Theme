import React from "react";
import Img from "gatsby-image";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

// Components
import { StyledSectionWrapper, StyledDivWrapper, H2, P } from "../Common";

// Helpers
import { theme } from "../../styles/theme";

const ProductsInfo = ({ titles, information }) => {
  return (
    <StyledSectionWrapper padding="0rem 16rem">
      <StyledDivWrapper
        display="grid"
        gridTemplateColumns="30% 70%"
        padding="8rem"
        borderTop={`11px solid ${theme.palePink}`}
      >
        <StyledDivWrapper>
          <StyledDivWrapper>
            {titles.map((title, i) => (
              <Link to={`${i}`} spy={true} smooth={true} duration={500}>
                <H2 as="h3" key={i}>
                  {title}
                </H2>
              </Link>
            ))}
          </StyledDivWrapper>
        </StyledDivWrapper>
        <StyledDivWrapper>
          <StyledDivWrapper>
            {information[0].map((e, i) => (
              <StyledDivWrapper key={i}>
                <Element>
                  <P id={`${i}`} fontSize="2rem">
                    {e}
                  </P>
                </Element>
              </StyledDivWrapper>
            ))}
          </StyledDivWrapper>
          <StyledDivWrapper>
            {information[1].map((e, i) => (
              <Img key={i} fluid={e.localFile.childImageSharp.fluid} />
            ))}
          </StyledDivWrapper>
          <H2 as="h4"></H2>
        </StyledDivWrapper>
      </StyledDivWrapper>
    </StyledSectionWrapper>
  );
};

export default ProductsInfo;
