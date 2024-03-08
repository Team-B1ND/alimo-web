import { atom } from "recoil";

export const categoryListState = atom<string[]>({
  key: "categoryListState",
  default: [],
});
