import styled from "styled-components";

// TODO - TYPE CHECK
export const StyledImage = styled.img.attrs(props => ({
  src: `${props.url}`,
  alt: `${props.alt}`
}))`
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
`;
