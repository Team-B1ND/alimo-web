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

export const newCategoryData = atom<CategoryData[]>({
  key: "newCategoryData",
  default: [],
});

export const newMemberData = atom<MemberInCategoryData[]>({
  key: "newMemberData",
  default: [],
});

export const newSelectedData = atom<string>({
  key: "newSelectedData",
  default: "",
});

export const newMemberInfo = atom<MemberInfo[]>({
  key: "newMemberInfo",
  default: [],
});

export const newStudent = atom<Student[]>({
  key: "newStudent",
  default: [],
});

export const MemberId = atom<number>({
  key: "MemberId",
  default: 0,
});
