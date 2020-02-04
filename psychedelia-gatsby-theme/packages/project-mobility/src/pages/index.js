import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "../style.css";

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

  const numSteps = 20.0;
  let boxElement;
  let prevRatio = 0.0;
  let increasingColor = "rgba(40,40, 190, ratio)";
  let decreasingColor = "rgba(190,40,40, ratio)";

  window.addEventListener(
    "load",
    event => {
      boxElement = document.querySelector("#box");
      console.log("ypo");
      createObserver();
    },
    false
  );

  const createObserver = () => {
    console.log("ypo");
    let observer;

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList()
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(boxElement);
  };

  const buildThresholdList = () => {
    let thresholds = [];
    let numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  };

  const handleIntersect = (entries, observer) => {
    console.log("yo");
    entries.forEach(entry => {
      if (entry.intersectionRatio > prevRatio) {
        entry.target.style.backgroundColor = increasingColor.replace(
          "ratio",
          entry.intersectionRatio
        );
      } else {
        entry.target.style.backgroundColor = decreasingColor.replace(
          "ratio",
          entry.intersectionRatio
        );
      }

      prevRatio = entry.intersectionRatio;
    });
  };

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

        <Link>
          <Icon viewBox="0 0 20 20">
            <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z" />
          </Icon>
        </Link>
        <Label>Hovering my parent change my style!</Label>
      </Wrapper>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Why do we use it? It is a long established fact that a
        reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy. Various versions have evolved
        over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like). Where does it come from? Contrary to popular
        belief, Lorem Ipsum is not simply random text. It has roots in a piece
        of classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Latin words, consectetur,
        from a Lorem Ipsum passage, and going through the cites of the word in
        classical literature, discovered the undoubtable source. Lorem Ipsum
        comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
        Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
        This book is a treatise on the theory of ethics, very popular during the
        Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
        amet..", comes from a line in section 1.10.32. The standard chunk of
        Lorem Ipsum used since the 1500s is reproduced below for those
        interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
        Malorum" by Cicero are also reproduced in their exact original form,
        accompanied by English versions from the 1914 translation by H. Rackham.
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Why do we use it? It is a long established fact that a
        reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy. Various versions have evolved
        over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like). Where does it come from? Contrary to popular
        belief, Lorem Ipsum is not simply random text. It has roots in a piece
        of classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Latin words, consectetur,
        from a Lorem Ipsum passage, and going through the cites of the word in
        classical literature, discovered the undoubtable source. Lorem Ipsum
        comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
        Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
        This book is a treatise on the theory of ethics, very popular during the
        Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
        amet..", comes from a line in section 1.10.32. The standard chunk of
        Lorem Ipsum used since the 1500s is reproduced below for those
        interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
        Malorum" by Cicero are also reproduced in their exact original form,
        accompanied by English versions from the 1914 translation by H. Rackham.
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Why do we use it? It is a long established fact that a
        reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy. Various versions have evolved
        over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like). Where does it come from? Contrary to popular
        belief, Lorem Ipsum is not simply random text. It has roots in a piece
        of classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Latin words, consectetur,
        from a Lorem Ipsum passage, and going through the cites of the word in
        classical literature, discovered the undoubtable source. Lorem Ipsum
        comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
        Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
        This book is a treatise on the theory of ethics, very popular during the
        Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
        amet..", comes from a line in section 1.10.32. The standard chunk of
        Lorem Ipsum used since the 1500s is reproduced below for those
        interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
        Malorum" by Cicero are also reproduced in their exact original form,
        accompanied by English versions from the 1914 translation by H. Rackham.
      </p>

      <div id="box">
        <div className="vertical">
          Welcome to <strong> The Box! </strong>
        </div>
      </div>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Why do we use it? It is a long established fact that a
        reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy. Various versions have evolved
        over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like). Where does it come from? Contrary to popular
        belief, Lorem Ipsum is not simply random text. It has roots in a piece
        of classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Latin words, consectetur,
        from a Lorem Ipsum passage, and going through the cites of the word in
        classical literature, discovered the undoubtable source. Lorem Ipsum
        comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
        Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
        This book is a treatise on the theory of ethics, very popular during the
        Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
        amet..", comes from a line in section 1.10.32. The standard chunk of
        Lorem Ipsum used since the 1500s is reproduced below for those
        interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
        Malorum" by Cicero are also reproduced in their exact original form,
        accompanied by English versions from the 1914 translation by H. Rackham.
      </p>
    </>
  );
};

export default index;