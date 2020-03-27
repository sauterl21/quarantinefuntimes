import styled from "styled-components";
import { Flex } from "grid-styled";

export const Title = styled(Flex)`
  color: royalblue;
  font-size: 5em;
  font-family: fantasy, ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.primary.weight};
  justify-content: center;
`;

export const BText = styled(Flex)`
  font-size: 7em;
  font-family: fantasy, ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.primary.weight};
  justify-content: center;
`;

export const SText = styled(Flex)`
  color: cadetblue;
  font-size: 1em;
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.primary.weight};
  justify-content: flex-start;
`;

export const Description = styled.text`
  color: rebeccapurple;
  justify-content: center;
  font-size: 4em;
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.primary.weight};
`;

export const Container = styled(Flex)`
  background-color: rebeccapurple;
  height: 10em;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Canvas = styled.canvas`
  width: 50em;
  height: 31.5em;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #cccccc;
  border: 1px;
  border-style: groove;
`;

export default BText;