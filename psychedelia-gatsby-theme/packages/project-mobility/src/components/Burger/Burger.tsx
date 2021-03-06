import React from "react";
import { StyledBurger } from "./Burger.styled";
import { OpenerProps } from "../../interfaces/navigation";

const Burger = ({ open, setOpen }: OpenerProps): JSX.Element => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  );
};

export default Burger;
