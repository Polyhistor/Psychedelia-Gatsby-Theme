import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import { theme } from "../styles/theme";
import { Wrapper } from "../interfaces/navigation";
import { Header } from "../components";

const Layout = ({ children }: Wrapper) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Header></Header>
      <main>{children}</main>
    </>
  </ThemeProvider>
);

export default Layout;
