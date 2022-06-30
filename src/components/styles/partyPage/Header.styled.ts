import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #171a21;
  border-radius: 0.3rem;
  padding: 1rem;
  color: white;
  justify-content: space-between;
`;

export const IconSquare = styled.div`
  display: inline-block;
  line-height: 0.5rem;
  text-align: center;
  border-radius: 0.3rem;
  padding: 1rem 1rem;
  background-color: #243a56;
  color: white;
`;

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SimpleButton = styled.button`
  all: unset;
  cursor: pointer;
`;
