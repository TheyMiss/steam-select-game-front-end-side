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
