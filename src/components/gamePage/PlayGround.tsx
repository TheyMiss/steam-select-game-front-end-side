import styled from "styled-components";
import GameCard from "./GameCard";

const PlayGround = () => {
  return (
    <Container>
      <Title>Which of these games has more reviews?</Title>
      <GameCard />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
`;

const Title = styled.p`
  font-size: 2rem;
  color: white;
  padding: 5rem;
`;

export default PlayGround;
