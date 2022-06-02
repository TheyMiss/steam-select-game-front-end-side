import {
  faHouse,
  faStar,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logger from "../components/partyPage/Logger";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { playerListState } from "../recoil/atoms";

const Party = () => {
  const playerList = useRecoilValue<Record<string, string>>(playerListState);
  const playerInRoom = Object.keys(playerList).length;

  return (
    <Container>
      <Logger />

      <RoomContainer>
        <DashBoard>
          <InfoCard>
            <IconSquare>
              <FontAwesomeIcon icon={faHouse} />
            </IconSquare>
            <div>HGv564rtb854xdchgdf</div>
          </InfoCard>
          <InfoCard>
            <FontAwesomeIcon icon={faUsers} />
            <p>{playerInRoom}</p>
          </InfoCard>
        </DashBoard>

        <PlayerListContainer>
          <Title>Players</Title>
          <PlayersList>
            {Object.keys(playerList).map((id, i) => (
              <PlayerCard key={id}>
                <PlayerDiv>
                  <p>{i + 1}</p>
                  <p>{playerList[id]}</p>
                  <PlayerIcon>
                    <FontAwesomeIcon icon={faUser} />
                  </PlayerIcon>
                </PlayerDiv>
                <PlayerDiv>
                  <p>Points</p>
                  <p>0</p>
                  <PlayerIcon>
                    <FontAwesomeIcon icon={faStar} />
                  </PlayerIcon>
                </PlayerDiv>
              </PlayerCard>
            ))}
          </PlayersList>
        </PlayerListContainer>
      </RoomContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: #1b2839;
`;

const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  color: white;
  padding: 1rem;
  gap: 5rem;
`;

const DashBoard = styled.div`
  display: flex;
  background-color: #171a21;
  border-radius: 0.3rem;
  padding: 1rem;
  color: white;
  justify-content: space-between;
`;

const IconSquare = styled.div`
  display: inline-block;
  line-height: 0.5rem;
  width: 1rem;
  text-align: center;
  border-radius: 0.3rem;
  padding: 1rem 1rem;
  background-color: #243a56;
  color: white;
`;

const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PlayerListContainer = styled.div`
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

export default Party;
