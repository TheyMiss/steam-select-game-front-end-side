import { faUser, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { currentPlayerIdState, playersTableState } from "../recoil/atoms";

interface IPlayerList {
  username: string;
  points: string;
  uid: string;
}

const PlayersTable = () => {
  const playerList = useRecoilValue<IPlayerList[]>(playersTableState);
  const currentPlayerId = useRecoilValue(currentPlayerIdState);

  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  color: white;
  justify-content: space-between;
  gap: 1rem;
`;

const PlayersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PlayerCard = styled.li`
  all: unset;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-radius: 0.3rem;
  ${(props) =>
    props.theme === true && "outline: white solid 2px; outline-offset: -2px;"};
  &:nth-child(odd) {
    background-color: #171a21;
  }
  &:nth-child(even) {
    background-color: #243a56;
  }
`;

const PlayerDiv = styled.div`
  display: flex;
  gap: 2rem;
`;

const PlayerIcon = styled.div`
  display: flex;
  color: ${(props) => props.theme === true && "gold"};
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  all: unset;
  color: white;
  font-size: 1.5rem;
  font-weight: 100;
  font-variant: small-caps;
`;

export default PlayersTable;
