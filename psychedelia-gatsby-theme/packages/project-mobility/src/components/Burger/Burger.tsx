import React from "react";
import { StyledBurger } from "./Burger.styled";

interface BurgerProps {
  open: Boolean;
  setOpen: Function;
}

const Burger = ({ open, setOpen }: BurgerProps) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  );
};

export default Burger;
