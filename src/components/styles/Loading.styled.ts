import styled, { keyframes } from "styled-components";

export const StyledLoading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: transparent;
  color: white;
  background-color: #1b2839;
`;

export const LoadingElements = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  height: 100vh;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-variant: small-caps;
`;

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  position: relative;
  animation: ${rotate360} 1s linear infinite;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: linear-gradient(to left, red, gold);
`;
export const SpinnerInner = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  background-color: #1b2839;
`;
