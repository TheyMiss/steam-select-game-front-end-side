import styled from "styled-components";
import PlayGround from "../components/gamePage/PlayGround";
import PlayerBoard from "../components/gamePage/PlayerBoard";
import { useRecoilState } from "recoil";
import { isOpenModalState } from "../recoil/atoms";
import Modal from "../components/Modal";

const Game = () => {
  const [isOpen, setIsOpen] = useRecoilState(isOpenModalState);

  return (
    <Container>
      {isOpen && <Modal />}
      <PlayGround />
      <PlayerBoard />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #171a21;
`;

export default Game;
