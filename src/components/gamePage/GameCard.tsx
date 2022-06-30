import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { socket } from "../../conts/socket";
import {
  gameDataState,
  gameInfoState,
  isOpenModalState,
  joinedRoomIdState,
  navigateToState,
  playersTableState,
} from "../../recoil/atoms";
import Loading from "../Loading";
import {
  GameCardDiv,
  HorizontalLines,
  Image,
} from "../styles/gamePage/GameCard.styled";
import { Title } from "../styles/Title.styled";

const GameCard = () => {
  const [gameData, setGameData] = useRecoilState(gameDataState);
  const [roomId] = useRecoilState(joinedRoomIdState);
  const setGameInfo = useSetRecoilState(gameInfoState);
  const setIsOpen = useSetRecoilState(isOpenModalState);
  const setNavigateTo = useSetRecoilState(navigateToState);
  const setPlayersList = useSetRecoilState(playersTableState);

  const sendSelectedGame = (appid: number) => {
    socket.emit("selected_game", { appid: appid, roomId: roomId });
  };

  useEffect(() => {
    setPlayersList([]);
    socket.emit("get_data", roomId);

    socket.on("send_data", (data) => {
      setGameInfo(data.gameInfo);

      if (data.gameInfo.round !== 5) {
        setGameData(data.games);
      }
    });

    socket.on("end_game", () => {
      setTimeout(() => {
        setNavigateTo("/party");
        setIsOpen(true);
      }, 1000 * 3);
    });
  }, []);

  if (gameData.length <= 0) {
    return <Loading />;
  }

  return (
    <>
      <GameCardDiv onClick={() => sendSelectedGame(gameData[0].appid)}>
        <Title>{gameData[0].name}</Title>

        <Image src={gameData[0].image} />
      </GameCardDiv>
      <HorizontalLines>
        <div />
        <div />
      </HorizontalLines>
      <GameCardDiv onClick={() => sendSelectedGame(gameData[1].appid)}>
        <Title>{gameData[1].name}</Title>
        <Image src={gameData[1].image} />
      </GameCardDiv>
    </>
  );
};

export default GameCard;
