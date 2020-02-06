import React, { useState } from "react";
import useIntersect from "./useIntersect";
import TestComp from "./testComp";
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

  // console.log(compToRender);

  const IntersectBox = props => {
    const [state, toggle] = useState(props.initial || 0);

    const [ref, entry] = useIntersect({
      threshold: buildThresholdArray()
    });

    // console.log(ref);

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

  const buildHexArray = q =>
    Array.from(Array(q).keys(), i =>
      Number(i * 1 * 100)
        .toString(16)
        .padStart(3, "0")
    );

  const Wrapper = styled.div`
    height: 200vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <>
      <Wrapper>
        <TestComp />
        <h1>Start that shit nigga</h1> */}
        {/* {Array.from(Array(40).keys(), i => (
          <br key={i}></br>
        ))} */}
        {buildHexArray(10).map((n, i) => (
          <IntersectBox
            initial={i % 2}
            key={n}
            backgroundColor={`#${n}`}
          ></IntersectBox>
        ))}
      </Wrapper>
    </>
  );
};

export default index;
