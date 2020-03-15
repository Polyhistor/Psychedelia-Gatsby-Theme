import React from "react";

// Components
import { Header } from "../components";
import Footer from "../components/Footer/Footer"

// Helpers
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import { theme } from "../styles/theme";
import { Wrapper } from "../interfaces/navigation";


const Layout = ({ children }: Wrapper) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  </ThemeProvider>
);

export default Layout;
