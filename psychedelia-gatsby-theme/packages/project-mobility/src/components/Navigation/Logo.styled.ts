import styled from "styled-components";

// TODO - TYPE CHECK
export const StyledLogo = styled.img.attrs(props => ({
  src: `${props.url}`
}))`
  width: 16rem;
  height: auto;
`;
