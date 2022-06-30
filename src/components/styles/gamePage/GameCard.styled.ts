import styled from "styled-components";

export const GameCardDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 500px;
  @media (max-width: 768px) {
    width: 300px;
  }
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all;
  &:hover p {
    background-color: white;
    color: black;
  }
  &:hover img {
    border: 0.5rem solid white;
  }
`;

export const Image = styled.img`
  background-position: center;
  object-fit: cover;
  border-radius: 0.3rem;
  border: 0.5rem solid #1b2839;
`;

export const HorizontalLines = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
  div {
    border-left: 0.35rem solid white;
    height: 4rem;
  }
`;
