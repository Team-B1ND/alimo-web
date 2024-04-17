import { atom } from "recoil";

export const newCategoryNameState = atom<string>({
  key: "newCategoryNameState",
  default: "",
});

export const ShowStudentList = atom<boolean>({
  key: "ShowStudentList",
  default: false,
});
