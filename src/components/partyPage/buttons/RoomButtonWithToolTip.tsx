import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Tooltip from "../../ToolTip";
import RoomButton from "./RoomButton";

const RoomButtonWithToolTip: React.FC<{
  icon: IconDefinition;
  label: string;
  isJoined?: boolean;
  onClick?: () => void;
  isDisabled?: boolean;
  helpText: string;
}> = ({ icon, label, isJoined, onClick, isDisabled, helpText }) => {
  if (isDisabled) {
    return (
      <Tooltip toolTipText={helpText}>
        <RoomButton
          icon={icon}
          label={label}
          isJoined={isJoined}
          onClick={onClick}
          isDisabled={isDisabled}
        />
      </Tooltip>
    );
  }

  return (
    <RoomButton
      icon={icon}
      label={label}
      isJoined={isJoined}
      onClick={onClick}
      isDisabled={isDisabled}
    />
  );
};

export default RoomButtonWithToolTip;
