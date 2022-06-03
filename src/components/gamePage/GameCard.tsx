import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { gameDataState } from "../../recoil/atoms";

const GameCard = () => {
  const [gameData] = useRecoilState(gameDataState);
  return (
    <>
      {gameData.map((game) => {
        return (
          <GameCardDiv key={game.id}>
            <p>{game.name}</p>
            <Image src={game.image} alt={game.id} />
          </GameCardDiv>
        );
      })}
    </>
  );
};

const GameCardDiv = styled.div`
  background-color: green;
`;

const Image = styled.img`
  background-position: center;
  object-fit: cover;
  position: relative;
`;

export default GameCard;
