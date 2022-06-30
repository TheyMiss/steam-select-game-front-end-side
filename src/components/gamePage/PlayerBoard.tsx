import { useRecoilState } from "recoil";
import { gameInfoState } from "../../recoil/atoms";
import PlayerList from "../PlayersTable";
import {
  GameInfo,
  IsAllowedPlayerList,
  StyledPlayerBoard,
} from "../styles/gamePage/PlayerBoard.styled";

const PlayerBoard = () => {
  const [gameInfo] = useRecoilState(gameInfoState);

  return (
    <StyledPlayerBoard>
      <GameInfo>
        <p>Rounds {gameInfo.round}</p>
        <p>Points {gameInfo.points}</p>
      </GameInfo>
      <IsAllowedPlayerList>
        <PlayerList />
      </IsAllowedPlayerList>
    </StyledPlayerBoard>
  );
};

export default PlayerBoard;
