import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import { theme } from "../styles/theme";
import { Wrapper } from "../interfaces/navigation";

const Layout = ({ children }: Wrapper) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  </ThemeProvider>
);

export default Layout;
