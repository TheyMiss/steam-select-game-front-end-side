import React from "react";
import styled from "styled-components";

const Tooltip: React.FC<{ children: any; toolTipText?: string }> = ({
  children,
  toolTipText,
}) => (
  <ToolTip>
    {children}
    <ToolTipText>{toolTipText}</ToolTipText>
  </ToolTip>
);

const ToolTipText = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: #243a56;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 150%;

  &:after {
    content: "";
    position: relative;
    top: 100%;
    left: 50%;
    border: 5px solid black transparent transparent transparent;
  }
`;

const ToolTip = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  :hover span {
    visibility: visible;
  }
`;

export default Tooltip;
