import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const RoomButton: React.FC<{
  icon: IconDefinition;
  label: string;
  isJoined?: boolean;
  onClick?: () => void;
}> = ({ icon, label, isJoined, onClick }) => {
  if (isJoined === false) {
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
  cursor: pointer;
  &:hover {
    background-color: #243a56;
    transition-delay: 100ms;
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
  width: 1rem;
  text-align: center;
  border-radius: 0.3rem;
  padding: 1rem 1rem;
  background-color: #243a56;
  color: white;
`;

export default RoomButton;
