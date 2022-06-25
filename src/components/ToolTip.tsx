import React from "react";
import styled from "styled-components";
import { ToolTip, ToolTipText } from "./styles/ToolTip.styled";

const Tooltip: React.FC<{
  children: any;
  toolTipText: string;
  theme: {};
}> = ({ children, toolTipText, theme }) => {
  return (
    <ToolTip>
      {children}
      <ToolTipText theme={theme}>{toolTipText}</ToolTipText>
    </ToolTip>
  );
};

export default Tooltip;
