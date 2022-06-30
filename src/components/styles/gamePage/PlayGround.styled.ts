import styled from "styled-components";

export const StyledPlayGround = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }

  p {
    color: white;
    font-size: 2rem;
  }
`;
