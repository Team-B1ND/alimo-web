import { MemberInCategoryData } from "src/types/categorys/interface";

export const SortMember = (member: MemberInCategoryData[]) => {
  return member.sort((a, b) => {
    if (a.grade === b.grade) {
      return a.room - b.room;
    }
    return a.grade - b.grade;
  });
};
