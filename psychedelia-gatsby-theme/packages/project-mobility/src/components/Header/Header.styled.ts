import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  width:100%; 
  z-index: 2000;
  top:0;
  background: white;
  padding: 0.5rem;
  box-shadow: ${({scroll, theme})=> scroll===false ? `0 2px 1rem ${theme.silverChalic}` : null}
`;
