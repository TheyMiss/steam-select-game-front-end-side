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
import {
  Button,
  ErrorMessageDiv,
  FormStyle,
  IconSquare,
  InputDiv,
  Label,
  StyledLogger,
} from "../styles/partyPage/Logger.styled";

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
    <StyledLogger>
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
              <FormStyle>
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
                    <Tooltip
                      toolTipText={
                        "Click to copy or double click to create new room"
                      }
                      theme={blTheme}
                    >
                      <Field
                        as={InputComp}
                        name="createdRoom"
                        placeHolder="Room Code..."
                        value={formik.values.createdRoom}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setCreatedRoom(e.target.value)
                        }
                        onDoubleClick={generateRoom}
                        onClick={() => {
                          navigator.clipboard.writeText(
                            formik.values.createdRoom
                          );
                        }}
                        on
                        readOnly={true}
                      />
                    </Tooltip>
                  </InputDiv>
                </div>
              </FormStyle>
            </Form>
          );
        }}
      </Formik>
    </StyledLogger>
  );
};

export default Logger;
