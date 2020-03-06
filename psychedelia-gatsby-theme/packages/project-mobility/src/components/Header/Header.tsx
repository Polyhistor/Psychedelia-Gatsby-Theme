import React, { useState, useRef, Dispatch, SetStateAction } from "react";

// Components
import Navigation from "../Navigation";
import { StyledHeader } from "./Header.styled";
import { Menu } from "../../components";
import { StyledDivWrapper } from "../Common/DivWrapper.styled";

// Helpers
// import { useOnClickOutside } from "../../hooks/";
import HeaderContext from "../../contexts/headerContext";

const Header = (): JSX.Element => {
  const node = useRef<HTMLDivElement>();

  return (
    <StyledHeader>
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
