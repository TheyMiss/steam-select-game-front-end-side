import styled from "styled-components";

export const StyledInput = styled.input`
  all: unset;
  background-color: #1b2839;
  color: white;
  padding: 0.5rem;
  ${(props) => props.theme === true && "cursor: pointer"}
`;
