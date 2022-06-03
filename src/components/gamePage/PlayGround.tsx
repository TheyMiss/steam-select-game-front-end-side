import styled from "styled-components";
import GameCard from "./GameCard";

const PlayGround = () => {
  return (
    <Container>
      <div>
        <GameCard />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
`;

export default PlayGround;
