import styled from "styled-components";

export const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: space-between;
  background-color: #171a21;
  @media (max-width: 768px) {
    justify-content: start;
  }
`;
