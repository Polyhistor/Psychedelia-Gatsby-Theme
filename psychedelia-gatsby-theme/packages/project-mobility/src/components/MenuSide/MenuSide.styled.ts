import styled from "styled-components";
import { StyledMenuProps } from "../../interfaces/navigation";

// TODO - MAKE THIS EXTENDABLE

export const StyledMenuSide = styled.div<StyledMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.babyPowder};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2.5rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: 500;
    color: ${({ theme }) => theme.errieBlack};
    text-decoration: none;
    transition: color 0.3s linear;
    margin-left: 1rem;

    &:hover {
      color: ${({ theme }) => theme.primarHover};
    }
  }
`;
