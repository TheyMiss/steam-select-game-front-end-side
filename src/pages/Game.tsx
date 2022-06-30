import PlayGround from "../components/gamePage/PlayGround";
import PlayerBoard from "../components/gamePage/PlayerBoard";
import { useRecoilState } from "recoil";
import { isOpenModalState } from "../recoil/atoms";
import Modal from "../components/Modal";
import { StyledGame } from "../components/styles/gamePage/Game.styled";

const Game = () => {
  const [isOpen] = useRecoilState(isOpenModalState);

  return (
    <StyledGame>
      {isOpen && <Modal />}
      <PlayGround />
      <PlayerBoard />
    </StyledGame>
  );
};

export default Game;
