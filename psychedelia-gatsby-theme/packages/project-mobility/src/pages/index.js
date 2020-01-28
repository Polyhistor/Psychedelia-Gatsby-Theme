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

    color: ${props => props.theme.fg};
    border: 2px solid ${props => props.theme.fg};
    background-color: ${props => props.theme.bg};
  `;

  Buttons.defaultProps = {
    theme: {
      main: "palevioletred"
    }
  };

  const theme = {
    fg: "palevioletred",
    bg: "white"
  };

  const invertTheme = ({ fg, bg }) => ({
    fg: bg,
    bg: fg
  });

  const Link = styled.a`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background: papayawhip;
    color: palevioletred;
  `;

  const Icon = styled.svg`
    flex: none;
    transition: fill 0.25s;
    width: 48px;
    height: 48px;

    ${Link}:hover & {
      fill: rebeccapurple;
    }
  `;

  const Label = styled.span`
    display: flex;
    align-items: center;
    line-height: 1.2;

    &::before {
      content: "◀";
      margin: 0 10px;
    }
  `;

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
      {/* 
      <Buttons>Normal</Buttons>

      <ThemeProvider theme={theme}>
        <Buttons>Themed</Buttons>

        <ThemeProvider theme={invertTheme}>
          <Buttons>Themed</Buttons>
          <Buttons theme={{ bg: "darkorange" }}>Overriden</Buttons>
        </ThemeProvider>
      </ThemeProvider> */}

      <Link>
        <Icon viewBox="0 0 20 20">
          <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z" />
        </Icon>
      </Link>
      <Label>Hovering my parent change my style!</Label>
    </Wrapper>
  );
};

export default index;
