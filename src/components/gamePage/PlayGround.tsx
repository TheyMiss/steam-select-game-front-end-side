import { StyledPlayGround } from "../styles/gamePage/PlayGround.styled";
import GameCard from "./GameCard";
import Timer from "./Timer";

const PlayGround = () => {
  return (
    <StyledPlayGround>
      <div>
        <p>Which of these games has more reviews?</p>
        <Timer />
      </div>
      <GameCard />
    </StyledPlayGround>
  );
};

export default PlayGround;
