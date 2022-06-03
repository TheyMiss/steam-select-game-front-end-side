import { atom } from "recoil";

export const playerListState = atom({
  key: "playerListState",
  default: {},
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
  id: string;
  name: string;
  image: string;
  price: string;
  reviews: number;
}

export const gameDataState = atom<IGameData[]>({
  key: "gameDataState",
  default: [],
});

export const scoreBoardDataState = atom({
  key: "ScoreBoardDataState",
  default: {},
});
