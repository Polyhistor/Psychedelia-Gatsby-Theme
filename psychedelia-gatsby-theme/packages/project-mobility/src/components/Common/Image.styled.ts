import styled from "styled-components";

// TODO - TYPE CHECK
export const StyledImage = styled.img.attrs(props => ({
  src: `${props.url}`,
  alt: `${props.alt}`
}))`
  width: ${({ width }) => (width ? `${width}` : null)};
  height: ${({ height }) => (height ? `${height}` : null)};
  border-radius: ${({ borderRadius }) => `${borderRadius}`};
`;
