import styled from "styled-components";

export const StyledGame = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: #171a21;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
