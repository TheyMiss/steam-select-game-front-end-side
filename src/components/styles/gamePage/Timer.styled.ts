import styled from "styled-components";

export const StyledTimer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  padding: 1rem 0;

  p {
    color: white;
    font-size: 1.5rem;
    font-variant: small-caps;
  }
`;

export const ProgessBar = styled.div`
  width: ${(props) => (props.theme > 0 ? props.theme + "0%" : "0%")};
  background-color: gold;
  -webkit-transition: width 1s ease-in;
  -o-transition: width 1 ease-in;
  transition: width 1 ease-in;
  height: 20px;
`;
