import styled from "styled-components";
import PlayGround from "../components/gamePage/PlayGround";
import PlayerBoard from "../components/gamePage/PlayerBoard";
import { useRecoilState } from "recoil";
import { isOpenModalState } from "../recoil/atoms";
import Modal from "../components/Modal";
import { Container } from "../components/styles/Container.styled";

const Game = () => {
  const [isOpen] = useRecoilState(isOpenModalState);

  return (
    <Container>
      {isOpen && <Modal />}
      <PlayGround />
      <PlayerBoard />
    </Container>
  );
};

export default Game;
