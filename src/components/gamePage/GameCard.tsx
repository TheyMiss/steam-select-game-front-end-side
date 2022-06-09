import { useRecoilState } from "recoil";
import styled from "styled-components";
import { socket } from "../../conts/socket";
import { gameDataState, joinedRoomIdState } from "../../recoil/atoms";

const GameCard = () => {
  const [gameData] = useRecoilState(gameDataState);
  const [roomId] = useRecoilState(joinedRoomIdState);

  const sendSelectedGame = (gameId: string) => {
    socket.emit("selected_game", { gameId: gameId, roomId: roomId });
  };

  return (
    <>
      {gameData.games &&
        gameData.games.map((game, index) => {
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
