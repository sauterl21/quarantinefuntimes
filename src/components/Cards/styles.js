import styled from "styled-components";
import poker from "./images/poker.jpg"
import roulette from "./images/roulette.jpg"

export const PButton = styled.button`
  width: ${({ theme }) => theme.fonts.cards.width};
  height: ${({ theme }) => theme.fonts.cards.height};
  color: royalblue;
  background-image: url(${poker});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #cccccc;
  justify-content: center;
  border-radius: 20px;
  border-color: lightblue;
  font-size: ${({ theme }) => theme.fonts.cards.size};
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.cards.weight};
  align-self: flex-end;
`;

export const RButton = styled.button`
  width: ${({ theme }) => theme.fonts.cards.width};
  height: ${({ theme }) => theme.fonts.cards.height};
  color: royalblue;
  background-image: url(${roulette});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #cccccc;
  justify-content: center;
  border-radius: 20px;
  border-color: lightblue;
  font-size: ${({ theme }) => theme.fonts.cards.size};
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.cards.weight};
  align-self: flex-end;
`;

export const Description = styled.text`
  color: rebeccapurple;
  justify-content: center;
  font-size: 4.2em;
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.cards.weight};
`;

export default Description;