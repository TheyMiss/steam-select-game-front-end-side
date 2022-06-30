import Options from "../components/partyPage/Options";
import PlayerList from "../components/PlayersTable";
import Header from "../components/partyPage/Header";
import { isOpenModalState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import Modal from "../components/Modal";
import { StyledParty } from "../components/styles/partyPage/Party.styled";
import { ContainerCollumn } from "../components/styles/Container.styled";

const Party = () => {
  const [isOpen] = useRecoilState(isOpenModalState);

  return (
    <StyledParty>
      {isOpen && <Modal />}
      <Options />

      <ContainerCollumn>
        <Header />
        <PlayerList />
      </ContainerCollumn>
    </StyledParty>
  );
};

export default Party;
