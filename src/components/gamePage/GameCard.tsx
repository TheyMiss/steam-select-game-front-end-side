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
    <>
      {gameData &&
        gameData.map((game, index) => {
          const mappedGameNum = 1;

          return (
            <div key={game.id}>
              {mappedGameNum === index && (
                <HorizontalLines>
                  <div />
                  <div />
                </HorizontalLines>
              )}

              <GameCardDiv onClick={() => sendSelectedGame(game.id)}>
                <p>{game.name}</p>
                <Image src={game.image} alt={game.id} />
              </GameCardDiv>
            </div>
          );
        })}
    </>
  );
};

const GameCardDiv = styled.div`
  background-color: #1b2839;
  padding: 0 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  p {
    color: white;
    font-size: 1.5rem;
    padding: 1rem 0;
  }
`;

const Image = styled.img`
  background-position: center;
  object-fit: cover;
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
