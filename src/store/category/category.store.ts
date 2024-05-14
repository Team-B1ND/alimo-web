import { CategoryData, MemberInCategoryData } from "@src/types/categorys/interface";
import { atom } from "recoil";

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

export const AddMember = atom<boolean>({
  key: "AddMember",
  default: false,
});

export const ShowCategoryName = atom<boolean>({
  key: "ShowCategoryName",
  default: false,
});

export const MemberData = atom<MemberInCategoryData[]>({
  key: "MemberData",
  default: [],
});

export const CategoryDataAtom = atom<CategoryData[]>({
  key: "CategoryDataAtom",
  default: [],
});
