import React from "react";
import { StyledHeader } from "./Header.styled";
import Navigation from "../Navigation";

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <Navigation></Navigation>
    </StyledHeader>
  );
};

export default Header;
