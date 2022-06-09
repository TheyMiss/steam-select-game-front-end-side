import {
  faArrowRightFromBracket,
  faBars,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import RoomButton from "../RoomButton";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  gameDataState,
  isJoinedState,
  joinedRoomIdState,
  playersTableState,
} from "../../recoil/atoms";
import { socket } from "../../conts/socket";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Actions = () => {
  const [isJoined] = useRecoilState(isJoinedState);
  const setPlayersList = useSetRecoilState(playersTableState);
  const setGameData = useSetRecoilState(gameDataState);
  const [currentRoomId, setCurrentRoomId] = useRecoilState(joinedRoomIdState);
  const navigate = useNavigate();

  const startGame = () => {
    socket.emit("start_game", currentRoomId);
    navigate("/game");
  };

  const leaveRoom = () => {
    socket.emit("leave_room", currentRoomId);
    setPlayersList([]);
    setCurrentRoomId("-");
  };

  useEffect(() => {
    socket.on("send_data", (data) => {
      setGameData(data);
    });
  });

  return (
    <SectionContainer>
      {isJoined && (
        <>
          <RoomButton
            icon={faPlay}
            label="Start Game"
            isJoined={isJoined}
            onClick={startGame}
          />
          <RoomButton
            icon={faArrowRightFromBracket}
            label="Leave Room"
            isJoined={isJoined}
            onClick={leaveRoom}
          />
        </>
      )}

      <RoomButton icon={faBars} label="To Menu" onClick={() => navigate("/")} />
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  gap: 1rem;
`;

export default Actions;
