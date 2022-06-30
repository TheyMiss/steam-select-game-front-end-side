import styled from "styled-components";

export const StyledPlayerBoard = styled.div`
  width: 40%;
  background-color: #1b2839;
  padding: 0 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const GameInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 1.2rem;
  padding: 1rem 0;
`;

export const IsAllowedPlayerList = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
