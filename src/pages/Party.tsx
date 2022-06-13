import Options from "../components/partyPage/Options";
import styled from "styled-components";
import PlayerList from "../components/PlayersTable";
import Header from "../components/partyPage/Header";
import { isOpenModalState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import Modal from "../components/Modal";

const Party = () => {
  const [isOpen] = useRecoilState(isOpenModalState);
  return (
    <Container>
      {isOpen && <Modal />}
      <Options />

      <RoomSection>
        <Header />
        <PlayerList />
      </RoomSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: #1b2839;
`;

const RoomSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  color: white;
  padding: 1rem;
  gap: 5rem;
`;

export default Party;
