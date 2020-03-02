import React, { useState, useRef, Dispatch, SetStateAction } from "react";

// Components
import Navigation from "../Navigation";
import { StyledHeader } from "./Header.styled";
import { Menu } from "../../components";
import { StyledDivWrapper } from "../Common/DivWrapper.styled";

// Helpers
import { useOnClickOutside } from "../../hooks/";
import HeaderContext from "../../contexts/headerContext";

const Header = (): JSX.Element => {
  const [open, setOpen]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  const node = useRef<HTMLDivElement>();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <StyledHeader>
      <HeaderContext.HeaderContextProvider>
        <Navigation></Navigation>
        <StyledDivWrapper ref={node} mobile>
          <Menu open={open} setOpen={setOpen}></Menu>
        </StyledDivWrapper>
      </HeaderContext.HeaderContextProvider>
    </StyledHeader>
  );
};

export default Header;
