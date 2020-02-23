import React, { useState, useRef, Dispatch, SetStateAction } from "react";
import { StyledHeader } from "./Header.styled";
import { Burger, Menu } from "../../components";
import { useOnClickOutside } from "../../hooks/";
import Navigation from "../Navigation";

const Header = (): JSX.Element => {
  const [open, setOpen]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  const node = useRef<HTMLDivElement>();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <StyledHeader>
      <div ref={node}>
        <Menu open={open} setOpen={setOpen}></Menu>
        <Burger open={open} setOpen={setOpen}></Burger>
      </div>
      <Navigation></Navigation>
    </StyledHeader>
  );
};

export default Header;
