import styled from "styled-components";

export const StyledLogger = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  height: 100%;
  gap: 1rem;
`;

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;
export const InputDiv = styled.div`
  position: relative;
  border-radius: 0.3rem;
`;

export const Label = styled.p`
  all: unset;
  color: white;
  font-weight: 100;
  font-variant: small-caps;
`;

export const Button = styled.button`
  all: unset;
  background-color: #243a56;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

export const IconSquare = styled.div`
  all: unset;
  background-color: #243a56;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

export const ErrorMessageDiv = styled.div`
  color: #ff6d6d;
  padding: 1rem 0 0 0;
`;
