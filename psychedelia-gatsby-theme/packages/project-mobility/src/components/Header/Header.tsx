import React, { useState, useRef, Dispatch, SetStateAction } from "react";

// Components
import Navigation from "../Navigation";
import { StyledHeader } from "./Header.styled";
import { Burger, Menu } from "../../components";
import { StyledDivWrapper } from "../Common/DivWrapper.styled";

// Helpers
import { useOnClickOutside } from "../../hooks/";

const Header = (): JSX.Element => {
  const [open, setOpen]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  const node = useRef<HTMLDivElement>();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <StyledHeader>
      <Navigation></Navigation>
      <StyledDivWrapper ref={node} mobile>
        <Menu open={open} setOpen={setOpen}></Menu>
        <Burger open={open} setOpen={setOpen}></Burger>
      </StyledDivWrapper>
    </StyledHeader>
  );
};

export default Header;
