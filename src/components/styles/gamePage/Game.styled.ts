import styled from "styled-components";

export const StyledGame = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #171a21;
  @media (max-width: 768px) {
    padding: 0;
    flex-direction: column-reverse;
  }
`;
