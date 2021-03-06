import styled from "styled-components";
import { Flex } from "grid-styled";
import quarantine from "./images/quarantine.png";

export const BText = styled(Flex)`
  font-size: 7em;
  font-family: fantasy, ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.primary.weight};
  justify-content: center;
`;

export const QSign = styled(Flex)`
background-image: url(${quarantine});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
justify-content: center;
height: 6em;
width: 6.8em;
`;

export const SText = styled(Flex)`
  color: cadetblue;
  font-size: 1em;
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.primary.weight};
  justify-content: flex-start;
`;

export const Title = styled(Flex)`
  color: royalblue;
  font-size: 5em;
  font-family: fantasy, ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.primary.weight};
  justify-content: center;
`;

export const Container = styled(Flex)`
  background-color: rebeccapurple;
  height: 10em;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TextInput = styled.input`
  width: 300px;
  height: 50px;
  background-color: cadetblue;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5em;
  color: aquamarine;
  border-radius: 15px;
`;

export default BText;