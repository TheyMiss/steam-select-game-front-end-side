import {
  faArrowRightFromBracket,
  faBars,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import RoomButton from "./buttons/RoomButton";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  gameDataState,
  gameInfoState,
  isJoinedState,
  isOpenModalState,
  isRoomPlayingState,
  joinedRoomIdState,
  navigateToState,
  playersTableState,
} from "../../recoil/atoms";
import { socket } from "../../conts/socket";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import RoomButtonWithToolTip from "./buttons/RoomButtonWithToolTip";

const Actions = () => {
  const [isJoined] = useRecoilState(isJoinedState);
  const setPlayersList = useSetRecoilState(playersTableState);
  const [currentRoomId, setCurrentRoomId] = useRecoilState(joinedRoomIdState);
  const setIsOpen = useSetRecoilState(isOpenModalState);
  const [isRoomPlaying, setIsRoomPlaying] = useRecoilState(isRoomPlayingState);
  const setNavigateTo = useSetRecoilState(navigateToState);
  const setGameInfo = useSetRecoilState(gameInfoState);
  const setGameData = useSetRecoilState(gameDataState);
  const navigate = useNavigate();

  const startGame = () => {
    setGameInfo({ round: 0, points: 0 });
    setGameData([]);
    socket.emit("start_game", currentRoomId);
  };

  const leaveRoom = () => {
    socket.emit("leave_room", currentRoomId);
    setPlayersList([]);
    setGameInfo({ round: 0, points: 0 });
    setGameData([]);
    setCurrentRoomId("-");
  };

  useEffect(() => {
    socket.on("is_playing", (data) => {
      setIsRoomPlaying(data.isPlaying);
    });

    socket.on("message", (data) => {
      alert(data.message);
    });
  }, []);

  useEffect(() => {
    socket.on("start_game", () => {
      setNavigateTo("/game");
      setIsOpen(true);
    });
    return () => {
      socket.off("start_game");
    };
  }, [currentRoomId]);

  return (
    <SectionContainer>
      {isJoined && (
        <>
          <RoomButtonWithToolTip
            icon={faPlay}
            label="Start Game"
            isJoined={isJoined}
            onClick={startGame}
            isDisabled={isRoomPlaying}
            helpText="Game is in progress!"
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
