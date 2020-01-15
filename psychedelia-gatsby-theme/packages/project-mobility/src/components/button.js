import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`
  font-size: 1.2rem;
  color: blue;
  border: 1px solid gray;
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = ({ children }) => <StyledButton>{children}</StyledButton>;
