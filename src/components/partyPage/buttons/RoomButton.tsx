import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const RoomButton: React.FC<{
  icon: IconDefinition;
  label: string;
  isJoined?: boolean;
  onClick?: () => void;
  isDisabled?: boolean;
}> = ({ icon, label, isJoined, onClick, isDisabled }) => {
  if (isJoined === false || isDisabled) {
    return (
      <NavigationButton disabled>
        <IconSquare>
          <FontAwesomeIcon icon={icon} />
        </IconSquare>

        <Label>{label}</Label>
      </NavigationButton>
    );
  }

  return (
    <NavigationButton onClick={onClick}>
      <IconSquare>
        <FontAwesomeIcon icon={icon} />
      </IconSquare>
      <Label>{label}</Label>
    </NavigationButton>
  );
};

const NavigationButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 0.3rem;
  transition: all;
  background-color: #243a56;
  cursor: pointer;
  &:hover {
    background-color: #244672;
    transition-delay: 100ms;
  }

  &:disabled {
    background-color: #3b424b;
    cursor: context-menu;
  }
`;

const Label = styled.p`
  all: unset;
  color: white;
  font-weight: 100;
  padding: 0 1rem;
`;

const IconSquare = styled.div`
  display: inline-block;
  line-height: 0.5rem;
  text-align: center;
  border-radius: 0.3rem;
  padding: 1rem 1rem;
  color: white;
`;

export default RoomButton;
