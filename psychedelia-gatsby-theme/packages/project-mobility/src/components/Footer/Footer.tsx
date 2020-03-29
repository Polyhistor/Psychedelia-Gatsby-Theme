import React from "react";
import { Link } from "gatsby";

// Components
import {
  StyledSectionWrapper,
  StyledDivWrapper,
  StyledSpanWrapper,
  H2
} from "../Common";
import { StyledUlList, StyledLiList } from "../Navigation/Navigation.styled";

// Queries
import useSiteConfigQuery from "../../queries/useSiteConfigQuery";

// Helpers
import { theme } from "../../styles/theme";

const Footer = () => {
  const footerData = useSiteConfigQuery()[0].node.footerLabels;

  return (
    <StyledSectionWrapper padding="0 16em">
      <StyledDivWrapper
        padding="5rem 0"
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(25%, 1fr))"
        borderTop={`11px solid ${theme.palePink}`}
      >
        {footerData.map((e, i) => (
          <StyledDivWrapper key={i}>
            <H2 as="h5" fontSize="5em" textTransform="capitalize" margin="0 0 3rem 0" textAlign="center">
              {e.label}
            </H2>
            {e.subs ? (
              <StyledUlList display="flex" direction="column" textAlign="center">
                {e.subs.map((s, i) => (
                  <StyledLiList key={i}>
                    <Link to={s.link}>
                      <StyledSpanWrapper
                        display="block"
                        hover=" font-weight:700; transition: all 0.1s ease-in;"
                      >
                        {s.label}
                      </StyledSpanWrapper>
                    </Link>
                  </StyledLiList>
                ))}
              </StyledUlList>
            ) : null}
          </StyledDivWrapper>
        ))}
      </StyledDivWrapper>
    </StyledSectionWrapper>
  );
};

export default Footer;
