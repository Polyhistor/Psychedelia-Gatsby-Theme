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
      <Wrapper></Wrapper>
    </>
  );
};

export default index;
