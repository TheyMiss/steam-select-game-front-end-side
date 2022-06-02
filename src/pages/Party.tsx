import { faRotate, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { nanoid } from "nanoid";
import Logger from "../components/partyPage/Logger";
import styled from "styled-components";

const socket = io(process.env.REACT_APP_ENDPOINT!);

interface IGame {
  id: string;
  name: string;
  image: string;
  reviews: number;
  price: string;
}

const Party = () => {
  return (
    <Container>
      <Logger />
      <RoomContainer>
        <div></div>
      </RoomContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: #1b2839;
`;

const RoomContainer = styled.div`
  height: 100vh;
  color: white;
`;

export default Party;
