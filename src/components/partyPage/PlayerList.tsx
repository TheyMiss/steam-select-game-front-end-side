import { faUser, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { playerListState } from "../../recoil/atoms";

interface IPlayerList {
  username: string;
  points: string;
}

const PlayerList = () => {
  const playerList =
    useRecoilValue<Record<string, IPlayerList>>(playerListState);

  return (
    <Container>
      <Title>Players</Title>
      <PlayersList>
        {Object.keys(playerList).map((id, i) => (
          <PlayerCard key={id}>
            <PlayerDiv>
              <p>{i + 1}</p>
              <p>{playerList[id].username}</p>
              <PlayerIcon>
                <FontAwesomeIcon icon={faUser} />
              </PlayerIcon>
            </PlayerDiv>
            <PlayerDiv>
              <p>Points</p>
              <p>{playerList[id].points}</p>
              <PlayerIcon>
                <FontAwesomeIcon icon={faStar} />
              </PlayerIcon>
            </PlayerDiv>
          </PlayerCard>
        ))}
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
  padding: 0 1rem;
  border-radius: 0.3rem;
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

export default PlayerList;
