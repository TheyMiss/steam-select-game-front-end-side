import { faHouse, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { joinedRoomIdState, playersTableState } from "../../recoil/atoms";

const Header = () => {
  const currentRoomId = useRecoilValue(joinedRoomIdState);
  const playerList = useRecoilValue(playersTableState);
  const playerInRoom = Object.keys(playerList).length;

  return (
    <Container>
      <InfoCard>
        <IconSquare>
          <FontAwesomeIcon icon={faHouse} />
        </IconSquare>
        <SimpleButton
          onClick={() => navigator.clipboard.writeText(currentRoomId)}
        >
          {currentRoomId}
        </SimpleButton>
      </InfoCard>
      <InfoCard>
        <FontAwesomeIcon icon={faUsers} />
        <p>{playerInRoom}</p>
      </InfoCard>
    </Container>
  );
};

const Container = styled.div`
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

const SimpleButton = styled.button`
  all: unset;
  cursor: pointer;
`;

export default Header;
