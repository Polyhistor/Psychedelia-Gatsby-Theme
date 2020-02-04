import React, { useState } from "react";
import useIntersect from "./useIntersect";
import styled, { ThemeProvider } from "styled-components";
import "../style.css";

import { Button } from "../components/button";
import { FadeBox, WidthBox } from "./boxes";

const index = () => {
  const { format } = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2
  });

  const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);

  const Button = styled.button`
    position: absolute;
    top: 2px;
    left: 2px;
    border: none;
    padding: 1rem;
    font-size: 1rem;
  `;

  const compToRender = [WidthBox, FadeBox];

  console.log(compToRender);

  const IntersectBox = props => {
    const [state, toggle] = useState(props.initial || 0);

    const [ref, entry] = useIntersect({
      threshold: buildThresholdArray()
    });

    const Component = compToRender[state];

    const componentName = state === 0 ? "FadeBox" : "WidthBox";

    return (
      <Component {...props} ref={ref} ratio={entry.intersectionRatio}>
        intersectionRatio: {format(entry.intersectionRatio)}
        <Button onClick={() => toggle(state === 0 ? 1 : 0)}>
          Switch to {componentName}
        </Button>
      </Component>
    );
  };

  const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <>
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

        {/* <Link>
          <Icon viewBox="0 0 20 20">
            <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z" />
          </Icon>
        </Link>
        <Label>Hovering my parent change my style!</Label> */}
      </Wrapper>
    </>
  );
};

export default index;
