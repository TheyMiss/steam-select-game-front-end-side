import styled from "styled-components";
import GameCard from "./GameCard";
import Timer from "./Timer";

const PlayGround = () => {
  return (
    <Container>
      <Info>
        <Title>Which of these games has more reviews?</Title>
        <Timer />
      </Info>
      <GameCard />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  width: 60%;
`;

const Info = styled.div`
  font-size: 2rem;
`;

const Title = styled.p`
  color: white;
`;

export default PlayGround;
