import {
  faPlus,
  faArrowRotateRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  createdRoomState,
  currentPlayerIdState,
  isJoinedState,
  joinedRoomIdState,
  joinedRoomState,
  playersTableState,
  usernameState,
} from "../../recoil/atoms";
import { socket } from "../../conts/socket";
import InputComp from "../InputComp";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { LoggerSchema } from "../../schema/Logger.schema";
import Tooltip from "../ToolTip";
import { blTheme } from "../../themes/ToolTip.themes";

const Logger = () => {
  const setJoinedRoomId = useSetRecoilState(joinedRoomIdState);
  const setIsJoined = useSetRecoilState(isJoinedState);
  const setPlayersTable = useSetRecoilState(playersTableState);
  const currentPlayerId = useSetRecoilState(currentPlayerIdState);
  const [joinedRoom, setJoinedRoom] = useRecoilState(joinedRoomState);
  const [createdRoom, setCreatedRoom] = useRecoilState(createdRoomState);
  const [username, setUsername] = useRecoilState(usernameState);

  const generateRoom = () => {
    const id = nanoid();
    setCreatedRoom(id);
  };

  const handleJoin = (values: {
    username: string;
    createdRoom: string;
    joinedRoom: string;
  }) => {
    const sendData = {
      roomId: values.createdRoom || values.joinedRoom,
      username: values.username,
    };
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
      <Formik
        enableReinitialize={true}
        initialValues={{
          username: username,
          createdRoom: createdRoom,
          joinedRoom: joinedRoom,
        }}
        onSubmit={(values) => handleJoin(values)}
        validationSchema={LoggerSchema}
      >
        {(formik) => {
          return (
            <Form>
              <div>
                <ErrorMessage
                  name="username"
                  render={(msg) => <ErrorMessageDiv>{msg}</ErrorMessageDiv>}
                />
                <Label>Username</Label>
                <InputDiv>
                  <IconSquare>
                    <FontAwesomeIcon icon={faUser} />
                  </IconSquare>
                  <Field
                    as={InputComp}
                    name="username"
                    type="text"
                    placeHolder="Username..."
                    value={formik.values.username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUsername(e.target.value)
                    }
                  />
                </InputDiv>
              </div>
              <div>
                <ErrorMessage
                  name="joinedRoom"
                  render={(msg) => <ErrorMessageDiv>{msg}</ErrorMessageDiv>}
                />
                <Label>Join Room</Label>
                <InputDiv>
                  <Button type="submit">
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                  <Field
                    as={InputComp}
                    name="joinedRoom"
                    placeHolder="Join Room..."
                    value={formik.values.joinedRoom}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setJoinedRoom(e.target.value)
                    }
                  />
                </InputDiv>
              </div>
              <div>
                <ErrorMessage
                  name="createdRoom"
                  render={(msg) => <ErrorMessageDiv>{msg}</ErrorMessageDiv>}
                />
                <Label>Create Room</Label>
                <InputDiv>
                  <Button type="submit">
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                  <Tooltip toolTipText={"Click to copy"} theme={blTheme}>
                    <Field
                      as={InputComp}
                      name="createdRoom"
                      placeHolder="Room Code..."
                      value={formik.values.createdRoom}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setCreatedRoom(e.target.value)
                      }
                      onClick={() =>
                        navigator.clipboard.writeText(formik.values.createdRoom)
                      }
                      readOnly={true}
                    />
                  </Tooltip>
                  <Button type="button" onClick={generateRoom}>
                    <FontAwesomeIcon icon={faArrowRotateRight} />
                  </Button>
                </InputDiv>
              </div>
            </Form>
          );
        }}
      </Formik>
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

const ErrorMessageDiv = styled.div`
  color: #ff6d6d;
  padding: 1rem 0 0 0;
`;

export default Logger;
