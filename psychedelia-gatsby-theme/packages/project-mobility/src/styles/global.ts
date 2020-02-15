import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,body {
    font-size: 62.5%;
    margin: 0;
    padding: 0;
  }

  *, *:after, *:before{
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.primaryDark};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-rendering: optimizeLegibility;
  }

`;
