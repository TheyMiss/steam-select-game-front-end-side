import {
  faArrowRightFromBracket,
  faArrowRotateRight,
  faBars,
  faPlay,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { io } from "socket.io-client";
import styled from "styled-components";
import { playerListState } from "../../recoil/atoms";
import InputComp from "../InputComp";
import RoomButton from "../RoomButton";

const socket = io(process.env.REACT_APP_ENDPOINT!);

const Logger = () => {
  const [joinedRoom, setJoinedRoom] = useState("");
  const [createdRoom, setCreatedRoom] = useState("");
  const [username, setUsername] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const setPlayersList = useSetRecoilState(playerListState);

  useEffect(() => {
    socket.on("joined_room", (data) => {
      setIsJoined(data.joined);
    });

    socket.on("party_members", (data) => {
      setPlayersList(data.players);
    });
  }, []);

  const joinRoom = () => {
    const sendData = { roomId: createdRoom || joinedRoom, username: username };
    socket.emit("join_room", sendData);
  };

  const generateRoom = () => {
    const id = nanoid();
    setCreatedRoom(id);
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
              <InputComp placeHolder="Username..." onChange={setUsername} />
            </InputDiv>
          </div>
          <div>
            <Label>Join Room</Label>
            <InputDiv>
              <Button onClick={joinRoom}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              <InputComp placeHolder="Room Code..." onChange={setJoinedRoom} />
            </InputDiv>
          </div>
          <div>
            <Label>Create Room</Label>
            <InputDiv>
              <Button onClick={joinRoom}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              <InputComp
                readOnly={true}
                value={createdRoom}
                onChange={setCreatedRoom}
                placeHolder="Generate Room..."
              />
              <Button onClick={generateRoom}>
                <FontAwesomeIcon icon={faArrowRotateRight} />
              </Button>
            </InputDiv>
          </div>
        </SectionConmtainer>
        <SectionConmtainer>
          <Title>Actions</Title>
          {isJoined && (
            <>
              <RoomButton
                icon={faPlay}
                label="Start Game"
                isJoined={isJoined}
              />
              <RoomButton
                icon={faArrowRightFromBracket}
                label="Leave Room"
                isJoined={isJoined}
              />
            </>
          )}

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
