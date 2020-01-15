import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { Button } from "../components/button";

const index = () => {
  const Title = styled.h1`
    font-size: 1.6rem;
    text-align: center;
    color: ${props => (props.primary ? "blue" : "palevioletred")};
  `;

  const TitleAlt = styled(Title)`
    font-size: 3rem;
  `;

  const Wrapper = styled.section`
    padding: 4rem;
    background: papayawhip;
  `;

  //   const Button = styled.button`
  //     display: inline-block;
  //     color: palevioletred;
  //     font-size: 1rem;
  //     margin: 1rem;
  //     padding: 0.25rem 1rem;
  //     border: 2px solid palevioletred;
  //     border-radius: 0.3rem;
  //   `;

  //   const reversedButton = props => (
  //     <Button {...props} children={props.children.split("").reverse()}></Button>
  //   );

  //   const Link = ({ className, children }) => (
  //     <a className={className}>{children}</a>
  //   );

  //   const StyledLink = styled(Link)`
  //     color: palevioletred;
  //     font-weight: bold;
  //   `;

  const Thing = styled.div.attrs(() => ({
    taxIndex: 0
  }))`
    color: blue;
    &:hover {
      color: red;
    }
  `;

  //   const Input = styled.input.attrs(props => ({
  //     type: props.type || "password",
  //     size: props.size || "1em"
  //   }))`
  //     color: palevioletred;
  //     font-size: 1rem;
  //     border: 2px solid palevioletred;
  //     border-radius: 3px;

  //     margin: ${props => props.size};
  //     padding: ${props => props.size};
  //   `;

  const Buttons = styled.button`
    font-size: 1rem;
    margin: 1rem;
    padding: 0.25rem 1rem;
    border-radius: 0.3rem;

    color: ${props => props.theme.main};
    border: 2px solid ${props => props.theme.main};
  `;

  Buttons.defaultProps = {
    theme: {
      main: "palevioletred"
    }
  };

  const theme = {
    main: "mediumseagreen"
  };

  return (
    <Wrapper>
      {/* <Title primary>Hello</Title>
      <TitleAlt as="a" primary>
        Hello
      </TitleAlt>
      <Link>link unstyled</Link>
      <StyledLink>link styled</StyledLink>
      <Button> COOL </Button>
      {/* <Button>Pouya</Button>
      <Button as={reversedButton}>Pouya</Button> */}
      {/* <Input type="number" placeholder="input"></Input> */}

      <Buttons>Normal</Buttons>

      <ThemeProvider theme={theme}>
        <Buttons>Themed</Buttons>
      </ThemeProvider>
    </Wrapper>
  );
};

export default index;
