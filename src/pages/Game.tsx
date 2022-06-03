import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import PlayGround from "../components/gamePage/PlayGround";
import ScoreBoard from "../components/gamePage/ScoreBoard";
import { gameDataState } from "../recoil/atoms";

interface IGameData {
  games: {
    id: string;
    name: string;
    image: string;
    price: string;
    reviews: number;
  }[];
  points: number;
  scoreBoard: {
    players: Record<string, { username: string; points: number }>;
  };
}

const Game = () => {
  // const [gameData] = useRecoilState<IGameData | {}>(gameDataState);

  return (
    <Container>
      <PlayGround />
      <ScoreBoard />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1b2839;
`;

export default Game;
