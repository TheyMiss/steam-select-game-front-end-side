import { atom } from "recoil";
import { IGameData } from "../types/gameData.type";
import { IGameInfoState } from "../types/gameInfoSTate.type";

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

export const isOpenModalState = atom({
  key: "isOpenModalState",
  default: false,
});

export const gameDataState = atom<IGameData[]>({
  key: "gameDataState",
  default: [],
});

export const gameInfoState = atom<IGameInfoState>({
  key: "gameInfoState",
  default: { round: 0, points: 0 },
});

export const isRoomPlayingState = atom({
  key: "isRoomPlayingState",
  default: false,
});

export const navigateToState = atom({
  key: "navigateToState",
  default: "/",
});

export const errorMsg = atom({
  key: "errorMsg",
  default: "",
});

export const usernameState = atom({
  key: "usernameState",
  default: "",
});
export const createdRoomState = atom({
  key: "createdRoomState",
  default: "",
});
export const joinedRoomState = atom({
  key: "joinedRoomState",
  default: "",
});
