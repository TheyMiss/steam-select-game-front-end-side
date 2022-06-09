import {
  faPlus,
  faArrowRotateRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  currentPlayerIdState,
  isJoinedState,
  joinedRoomIdState,
  playersTableState,
} from "../../recoil/atoms";
import { socket } from "../../conts/socket";
import InputComp from "../InputComp";

const Logger = () => {
  const setJoinedRoomId = useSetRecoilState(joinedRoomIdState);
  const setIsJoined = useSetRecoilState(isJoinedState);
  const setPlayersTable = useSetRecoilState(playersTableState);
  const currentPlayerId = useSetRecoilState(currentPlayerIdState);
  const [joinedRoom, setJoinedRoom] = useState("");
  const [createdRoom, setCreatedRoom] = useState("");
  const [username, setUsername] = useState("");

  const generateRoom = () => {
    const id = nanoid();
    setCreatedRoom(id);
  };

  const joinRoom = () => {
    const sendData = { roomId: createdRoom || joinedRoom, username: username };
    socket.emit("join_room", sendData);
  };

  useEffect(() => {
    socket.on("joined_room", (data) => {
      setJoinedRoomId(data.roomId);
      setIsJoined(data.joined);
      currentPlayerId(data.uid);
    });
    socket.on("players_table", (data) => {
      setPlayersTable(data);
    });
  }, []);

  return (
    <Container>
      <div>
        <Label>Username</Label>
        <InputDiv>
          <IconSquare>
            <FontAwesomeIcon icon={faUser} />
          </IconSquare>
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  gap: 1rem;
`;

const InputDiv = styled.div`
  position: relative;
  background-color: #1b2839;
  border-radius: 0.3rem;
  width: 100%;
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

const IconSquare = styled.div`
  display: inline-block;
  line-height: 0.5rem;
  text-align: center;
  border-radius: 0.3rem;
  padding: 1rem 1rem;
  background-color: #243a56;
  color: white;
`;

export default Logger;
