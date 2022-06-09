import { atom } from "recoil";

export const playersTableState = atom({
  key: "playersTableState",
  default: [],
});

export const currentPlayerIdState = atom({
  key: "currentPlayerIdState",
  default: "",
});

export const joinedRoomIdState = atom({
  key: "joinedRoomIdState",
  default: "-",
});

export const isJoinedState = atom({
  key: "isJoinedState",
  default: false,
});

interface IGameData {
  games: {
    id: string;
    name: string;
    image: string;
    price: string;
    reviews: number;
  }[];
  playerBoard: {
    players: Record<string, { username: string; points: number }>;
  };
  points: number;
  round: number;
}

export const gameDataState = atom<IGameData>({
  key: "gameDataState",
  default: {
    games: [{ id: "", name: "", image: "", price: "", reviews: 0 }],
    playerBoard: { players: { "": { username: "", points: 0 } } },
    points: 0,
    round: 0,
  },
});
