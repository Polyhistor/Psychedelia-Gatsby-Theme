import React from "react";

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

const ContactMethods = ({ contactsData }) => {
  console.log(contactsData);
  return (
    <StyledSectionWrapper padding="0 10rem">
      <StyledDivWrapper borderTop={`11px solid ${theme.palePink}`}>
        {contactsData.map((e, i) => (
          <StyledDivWrapper
            margin="7em 5em"
            display="grid"
            gridTemplateColumns="50% 50%"
            gridColumnGap="6em"
            key={i}
          >
            <StyledDivWrapper>
              <H2 fontSize="7em" lineHeight="1" margin="0">
                {e.title}
              </H2>
              <P fontSize="1.6rem">{e.description}</P>
            </StyledDivWrapper>
            {e.number || e.number ? (
              <StyledSpanWrapper
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <H2
                  as="a"
                  color="blue"
                  fontSize="10em"
                  textDecoration="none"
                  fontWeight="700"
                  href={`tel:${e.number.split(" ").join("-")}`}
                >
                  {e.number}
                </H2>
              </StyledSpanWrapper>
            ) : e.email ? (
              <StyledSpanWrapper
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <H2
                  as="a"
                  color="blue"
                  fontSize="4em"
                  textDecoration="none"
                  fontWeight="700"
                  href={`mailto:${e.email}`}
                >
                  {e.email}
                </H2>
              </StyledSpanWrapper>
            ) : e.address ? (
              <StyledSpanWrapper
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <H2
                  as="a"
                  color="blue"
                  fontSize="4em"
                  textDecoration="none"
                  fontWeight="700"
                  href={`http://maps.google.com/?q=${e.address}`}
                >
                  {e.address}
                </H2>
              </StyledSpanWrapper>
            ) : null}
          </StyledDivWrapper>
        ))}
      </StyledDivWrapper>
    </StyledSectionWrapper>
  );
};

export default ContactMethods;
