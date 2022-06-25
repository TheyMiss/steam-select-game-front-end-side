import styled from "styled-components";

export const ToolTipText = styled.span`
  visibility: hidden;
  min-width: 180px;
  background-color: #243a56;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 1rem;
  position: absolute;
  z-index: 1;
  ${(props) => props.theme};
  &:after {
    content: "";
    position: relative;
    top: 100%;
    left: 50%;
    border: 5px solid black transparent transparent transparent;
  }
`;

export const ToolTip = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  :hover span {
    visibility: visible;
  }
`;
