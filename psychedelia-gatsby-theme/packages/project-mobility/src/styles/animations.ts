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

export const scale = keyframes`
  from {
  scale: 0;
}

to {
  scale: 1.1;
}
`;

export const scaleInterpolated = css`
  animation: 0.5s ${scale} ease-in-out;
`;
