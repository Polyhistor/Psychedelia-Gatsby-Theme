import React from "react";

// Components
import Navigation from "../Navigation";
import { StyledHeader } from "./Header.styled";
import { Menu } from "../../components";
import { StyledDivWrapper } from "../Common/DivWrapper.styled";

// Helpers
import HeaderContext from "../../contexts/headerContext";
import {useScrollHandler} from "../../hooks/useScroll"

const Header = (): JSX.Element => {
  const scroll = useScrollHandler()

  return (
    <StyledHeader scroll={scroll}>
      <HeaderContext.HeaderContextProvider>
        <Navigation></Navigation>
        <StyledDivWrapper mobile>
          <Menu></Menu>
        </StyledDivWrapper>
      </HeaderContext.HeaderContextProvider>
    </StyledHeader>
  );
};

export default Header;
