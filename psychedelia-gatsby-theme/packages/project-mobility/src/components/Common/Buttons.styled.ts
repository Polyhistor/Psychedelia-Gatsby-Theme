import styled from "styled-components";

export const StyledButtonPrimary = styled.button`
  margin: ${({ margin }) => `${margin}`};
  padding: ${({ padding }) => `${padding}`};
  font-size: ${({ fontSize }) => `${fontSize}`};
  background-color: ${({ theme }) => theme.blueCrayola};
  color: white;
  width: 40.8rem;
  height: 4.8rem;
  border: 1px solid;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  font-weight: 600;
`;
