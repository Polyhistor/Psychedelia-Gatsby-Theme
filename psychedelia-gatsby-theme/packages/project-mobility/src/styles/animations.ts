import { keyframes, css } from "styled-components";

export const fadeIn = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`;

export const fadeInInterpolated = css`
  animation: 0.3s ${fadeIn} ease-in;
`;
