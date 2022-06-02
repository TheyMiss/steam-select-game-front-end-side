import React from "react";
import styled from "styled-components";

const NavigationButton: React.FC<{
  title: string;
  address: string;
}> = ({ title, address }) => {
  return <NavButton href={address}>{title}</NavButton>;
};

const NavButton = styled.a`
  all: unset;
  background-color: #243a56;
  color: white;
  padding: 0.5rem 5rem;
  margin: 0.3rem 0;
  text-align: center;
  display: inline-block;
  font-size: 1.1rem;
  border-radius: 0.3rem;
  transition: all;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #243a56;
    transition-delay: 50ms;
  }
`;

export default NavigationButton;
