import styled from "styled-components";
import PlayGround from "../components/gamePage/PlayGround";
import PlayerBoard from "../components/gamePage/PlayerBoard";

const Game = () => {
  return (
    <Container>
      <PlayGround />
      <PlayerBoard />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #171a21;
`;

export default Game;
