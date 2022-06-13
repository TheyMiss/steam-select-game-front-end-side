import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
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

const GameCard = () => {
  const [gameData, setGameData] = useRecoilState(gameDataState);
  const [roomId] = useRecoilState(joinedRoomIdState);
  const setGameInfo = useSetRecoilState(gameInfoState);
  const setIsOpen = useSetRecoilState(isOpenModalState);
  const setNavigateTo = useSetRecoilState(navigateToState);
  const setPlayersList = useSetRecoilState(playersTableState);

  const sendSelectedGame = (gameId: string) => {
    console.log(gameId);

    socket.emit("selected_game", { gameId: gameId, roomId: roomId });
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
    <div>
      <GameCardDiv onClick={() => sendSelectedGame(gameData[0].id)}>
        <Title>{gameData[0].name}</Title>
        <Image src={gameData[0].image} />
      </GameCardDiv>
      <HorizontalLines>
        <div />
        <div />
      </HorizontalLines>
      <GameCardDiv onClick={() => sendSelectedGame(gameData[1].id)}>
        <Title>{gameData[1].name}</Title>
        <Image src={gameData[1].image} />
      </GameCardDiv>
    </div>
  );
};

const GameCardDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 275px;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all;
  &:hover p {
    background-color: white;
    color: black;
  }
  &:hover img {
    border: 0.5rem solid white;
  }
`;

const Image = styled.img`
  background-position: center;
  object-fit: cover;
  border-radius: 0.3rem;
  border: 0.5rem solid #1b2839;
`;

const Title = styled.p`
  position: absolute;
  bottom: 0;
  color: white;
  font-size: 1.2rem;
  width: 100%;
  background-color: #1b2839d6;
  padding: 0.5rem 1rem;
`;

const HorizontalLines = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  gap: 1rem;
  div {
    border-left: 0.35rem solid white;
    height: 4rem;
  }
`;

export default GameCard;
