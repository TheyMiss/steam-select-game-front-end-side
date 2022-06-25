import styled from "styled-components";
import { Title } from "../styles/Title.styled";
import Actions from "./Actions";
import Logger from "./Logger";

const Options = () => {
  return (
    <Container>
      <Menu>
        <div>
          <Title>Logger</Title>
          <Logger />
        </div>
        <div>
          <Title>Actions</Title>
          <Actions />
        </div>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-color: #171a21;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: space-between;
  height: 100%;
`;

export default Options;
