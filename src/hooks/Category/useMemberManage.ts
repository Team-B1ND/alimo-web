import { useState } from "react";
import { alimoV1Axios } from "@src/libs/axios/CustomAxios";
import { CategoryData, MemberInCategoryData } from "@src/types/Category/interface";

const useMemberManage = () => {
  // const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  // const [memberData, setMemberData] = useState<MemberInCategoryData[]>([]);
  // const handleGivePermission = async () => {
  //   if (permission === "ACCESS_MEMBER") {
  //     try {
  //       await alimoV1Axios.patch("/permission/change-admin", {
  //         memberId: memberData.map((member) => member.id),
  //         categoryName: categoryData.map((category) => category.categoryName),
  //       });
  //       console.log(permission);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     try {
  //       await alimoV1Axios.patch("permission/change-student", {
  //         memberId: selectedStudents.map((member) => member.id),
  //         categoryName: categoryData.map((category) => category.categoryName),
  //       });
  //       console.log(permission);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  // return {
  //   handleGivePermission,
  // };
};

export default useMemberManage;
