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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-rendering: optimizeLegibility;
  }

  main {
    max-width: 160rem;
    margin: 0 auto;
  }

  .gatsby-image-wrapper{
    border-radius: 0.4rem;
  }

  .test {
    color: red;
  }

`;
