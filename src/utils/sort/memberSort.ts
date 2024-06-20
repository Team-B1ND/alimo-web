import { MemberInCategoryData } from "src/types/categorys/interface";

export const SortMember = (member: MemberInCategoryData[]) => {
  if (member) {
    const sortedMember = [...member].sort((a, b) => {
      if (a.grade === b.grade) {
        return a.room - b.room;
      }
      return a.grade - b.grade;
    });
    return sortedMember;
  }
  return;
};
