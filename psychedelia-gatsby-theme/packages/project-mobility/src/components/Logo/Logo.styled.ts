import styled from "styled-components";

// TODO - TYPE CHECK
export const StyledLogo = styled.img.attrs(props => ({
  src: `${props.url}`,
  alt: `${props.alt}`
}))`
  width: 22rem;
  height: auto;
`;
