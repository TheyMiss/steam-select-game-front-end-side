import { faUser, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilValue } from "recoil";
import { currentPlayerIdState, playersTableState } from "../recoil/atoms";
import {
  PlayerCard,
  PlayerDiv,
  PlayerIcon,
  PlayersList,
  StyledPlayersTable,
} from "./styles/partyPage/PlayersTable";
import { Title } from "./styles/Title.styled";

interface IPlayerList {
  username: string;
  points: string;
  uid: string;
}

const PlayersTable = () => {
  const playerList = useRecoilValue<IPlayerList[]>(playersTableState);
  const currentPlayerId = useRecoilValue(currentPlayerIdState);

  return (
    <StyledPlayersTable>
      <Title>Players</Title>
      <PlayersList>
        {playerList.length > 0 &&
          playerList.map((player, index) => {
            let isCurrentPlayer = false;

            if (player.uid === currentPlayerId) {
              isCurrentPlayer = true;
            }
            return (
              <PlayerCard key={index} theme={isCurrentPlayer}>
                <PlayerDiv>
                  <p>{index + 1}</p>
                  <p>{player.username}</p>
                  <PlayerIcon>
                    <FontAwesomeIcon icon={faUser} />
                  </PlayerIcon>
                </PlayerDiv>
                <PlayerDiv>
                  <p>Points</p>
                  <p>{player.points}</p>
                  <PlayerIcon theme={isCurrentPlayer}>
                    <FontAwesomeIcon icon={faStar} />
                  </PlayerIcon>
                </PlayerDiv>
              </PlayerCard>
            );
          })}
      </PlayersList>
    </StyledPlayersTable>
  );
};

export default PlayersTable;
