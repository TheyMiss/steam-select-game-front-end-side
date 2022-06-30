import styled from "styled-components";

export const StyledPlayersTable = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  color: white;
  justify-content: space-between;
  gap: 1rem;
`;

export const PlayersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PlayerCard = styled.li`
  all: unset;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-radius: 0.3rem;
  ${(props) =>
    props.theme === true && "outline: white solid 2px; outline-offset: -2px;"};
  &:nth-child(odd) {
    background-color: #171a21;
  }
  &:nth-child(even) {
    background-color: #243a56;
  }
`;

export const PlayerDiv = styled.div`
  display: flex;
  gap: 2rem;
`;

export const PlayerIcon = styled.div`
  display: flex;
  color: ${(props) => props.theme === true && "gold"};
  justify-content: center;
  align-items: center;
`;
