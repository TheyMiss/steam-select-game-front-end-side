import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #0000009e;
  color: white;
  z-index: 1;
`;

export const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: 25vh;
    border-radius: 1rem;
    font-size: 3.5rem;
  }
`;
