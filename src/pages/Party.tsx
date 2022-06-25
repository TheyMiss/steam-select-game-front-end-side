import Options from "../components/partyPage/Options";
import styled from "styled-components";
import PlayerList from "../components/PlayersTable";
import Header from "../components/partyPage/Header";
import { isOpenModalState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import Modal from "../components/Modal";
import { StyledParty } from "../components/styles/Party.styled";

const Party = () => {
  const [isOpen] = useRecoilState(isOpenModalState);

  return (
    <StyledParty>
      {isOpen && <Modal />}
      <Options />

      <RoomSection>
        <Header />
        <PlayerList />
      </RoomSection>
    </StyledParty>
  );
};

const RoomSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  color: white;
  padding: 1rem;
  gap: 5rem;
`;

export default Party;
