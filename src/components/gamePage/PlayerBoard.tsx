import { useRecoilState } from "recoil";
import styled from "styled-components";
import { gameInfoState } from "../../recoil/atoms";
import PlayerList from "../PlayersTable";

const PlayerBoard = () => {
  const [gameInfo] = useRecoilState(gameInfoState);

  return (
    <Container>
      <GameInfo>
        <p>Rounds {gameInfo.round}</p>
        <p>Points {gameInfo.points}</p>
      </GameInfo>
      <PlayerList />
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
  background-color: #1b2839;
  padding: 0 1rem;
`;

const GameInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 1.2rem;
  padding: 1rem 0;
`;

export default PlayerBoard;
