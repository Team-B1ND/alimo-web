import { CategoryData, MemberInCategoryData } from "src/types/Category/interface";
import { atom } from "recoil";
import { MemberInfo, Student } from "src/types/Category/Add.types";

export const newCategoryNameState = atom<string>({
  key: "newCategoryNameState",
  default: "",
});

export const ShowStudentList = atom<boolean>({
  key: "ShowStudentList",
  default: false,
});

export const newSelectedData = atom<string>({
  key: "newSelectedData",
  default: "",
});

export const MemberId = atom<number>({
  key: "MemberId",
  default: 0,
});

export const Permission = atom<string>({
  key: "Permission",
  default: "",
});
