import {
  faArrowRightFromBracket,
  faArrowRotateRight,
  faBars,
  faPlay,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import InputComp from "../InputComp";
import RoomButton from "../RoomButton";

const Logger = () => {
  const [roomId, setRoomId] = useState("");
  const click = () => {
    console.log(roomId);
  };

  return (
    <Container>
      <Menu>
        <SectionConmtainer>
          <div>
            <Title>Logger</Title>
          </div>
          <div>
            <Label>Username</Label>
            <InputDiv>
              <Button>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              <InputComp
                placeHolder="Username..."
                onClick={click}
                onChange={setRoomId}
              />
            </InputDiv>
          </div>
          <div>
            <Label>Join Room</Label>
            <InputDiv>
              <Button>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              <InputComp
                placeHolder="Room Code..."
                onClick={click}
                onChange={setRoomId}
              />
            </InputDiv>
          </div>
          <div>
            <Label>Create Room</Label>
            <InputDiv>
              <Button>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              <InputComp onClick={click} onChange={setRoomId} />
              <Button>
                <FontAwesomeIcon icon={faArrowRotateRight} />
              </Button>
            </InputDiv>
          </div>
        </SectionConmtainer>
        <SectionConmtainer>
          <Title>Actions</Title>
          <RoomButton icon={faPlay} label="Start Game" />
          <RoomButton icon={faArrowRightFromBracket} label="Leave Room" />
          <RoomButton icon={faBars} label="To Menu" />
        </SectionConmtainer>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-color: #171a21;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: space-between;
  height: 100%;
`;

const InputDiv = styled.div`
  position: relative;
  background-color: #1b2839;
  border-radius: 0.3rem;
  width: 100%;
`;

const Title = styled.p`
  all: unset;
  color: white;
  font-size: 1.5rem;
  font-weight: 100;
  font-variant: small-caps;
`;

const Label = styled.p`
  all: unset;
  color: white;
  font-weight: 100;
  font-variant: small-caps;
`;

const Button = styled.button`
  all: unset;
  background-color: #243a56;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const SectionConmtainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  gap: 1rem;
`;

export default Logger;
