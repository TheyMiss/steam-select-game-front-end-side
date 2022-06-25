import styled from "styled-components";
import { StyledPlayGround } from "../styles/PlayGround.styled";
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
