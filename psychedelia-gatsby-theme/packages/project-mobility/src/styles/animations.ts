import { keyframes, css } from "styled-components";

export const fadeIn = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`;

export const fontScale = css`
  transition: font-size 0.2s ease-in;
  font-size: 2.1rem;
  font-weight: 700;
`;

export const borderBottom = css`
  border-bottom: ${({ theme }) => `1px solid ${theme.silverChalic}`};
`;

export const scale = css`
  transition: all 0.2s ease-in;
  border: 1px solid #e7e7e7;
  background: white;
  z-index: 1000;
  transform: scale(1.05);
`;
