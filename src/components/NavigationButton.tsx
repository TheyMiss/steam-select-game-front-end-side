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
  text-align: center;
  display: inline-block;
  font-size: 1.1rem;
  border-radius: 0.3rem;
  cursor: pointer;
`;

export default NavigationButton;
