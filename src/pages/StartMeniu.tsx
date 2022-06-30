import styled from "styled-components";
import NavigationButton from "../components/NavigationButton";

const StartMeniu = () => {
  return (
    <Container>
      <Meniu>
        <NavigationButton title="Party" address="/party" />
      </Meniu>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1b2839;
`;

const Meniu = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.1rem;
  border-radius: 0.3rem;
  //background-color: #243a56;
`;

export default StartMeniu;
