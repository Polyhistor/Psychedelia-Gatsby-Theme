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
  font-size: 2.2rem;
  font-weight: 700;
`;
