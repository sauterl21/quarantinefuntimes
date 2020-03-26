import styled from "styled-components";
import mem from "./images/Memory.png";

export const MButton = styled.button`
  width: 5em;
  height: 3em;
  color: black;
  background-image: url(${mem});
  justify-content: center;
  border-radius: 20px;
  font-size: 7em;
  font-family: fantasy, ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.primary.weight};
  align-self: flex-end;
`;

export const SButton = styled.button`
  width: 5em;
  height: 3em;
  color: rebeccapurple;
  background-color: seagreen;
  justify-content: center;
  border-radius: 20px;
  font-size: 7em;
  font-family: fantasy, ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.primary.weight};
`;

export default MButton;