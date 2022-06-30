import {
  faArrowRightFromBracket,
  faBars,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import RoomButton from "./buttons/RoomButton";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  errorMsg,
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
import { useEffect, useState } from "react";
import RoomButtonWithToolTip from "./buttons/RoomButtonWithToolTip";
import { StyledActions } from "../styles/partyPage/Actions.styled";

const Actions = () => {
  const [isJoined] = useRecoilState(isJoinedState);
  const [playerList, setPlayersList] = useRecoilState(playersTableState);
  const [currentRoomId, setCurrentRoomId] = useRecoilState(joinedRoomIdState);
  const setIsOpen = useSetRecoilState(isOpenModalState);
  const [isRoomPlaying, setIsRoomPlaying] = useRecoilState(isRoomPlayingState);
  const setNavigateTo = useSetRecoilState(navigateToState);
  const setGameInfo = useSetRecoilState(gameInfoState);
  const setGameData = useSetRecoilState(gameDataState);
  const [errMsg, setErrMsg] = useRecoilState(errorMsg);
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);

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
    socket.on("game_info_message", (data) => {
      setErrMsg(data.message);
    });

    socket.on("is_playing", (data) => {
      setIsRoomPlaying(data.isPlaying);
    });
  }, [errMsg, setIsRoomPlaying]);

  useEffect(() => {
    socket.on("start_game", () => {
      setNavigateTo("/game");
      setIsOpen(true);
    });
    return () => {
      socket.off("start_game");
    };
  }, [currentRoomId]);

  useEffect(() => {
    if (isRoomPlaying || playerList.length <= 1) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [disabled, isRoomPlaying, playerList.length]);

  return (
    <StyledActions>
      {isJoined && (
        <>
          <RoomButtonWithToolTip
            icon={faPlay}
            label="Start Game"
            isJoined={isJoined}
            onClick={startGame}
            isDisabled={disabled}
            helpText={errMsg}
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
    </StyledActions>
  );
};

export default Actions;
