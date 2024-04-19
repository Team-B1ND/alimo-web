import React, { useEffect, useState } from "react";
import { showToast } from "src/libs/Toast/Swal";
import { CategoryData, MemberInCategoryData } from "src/types/Category/interface";
import { Student, MemberInfo } from "src/types/Category/Add.types";
import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import Swal from "sweetalert2";
import { useRecoilState } from "recoil";
import {
  MemberId,
  newCategoryData,
  newMemberData,
  newMemberInfo,
  newSelectedData,
  newStudent,
} from "src/store/category/category.store";

const useCategoryManage = () => {
  const [isClickedCategory, setIsClickedCategory] = useRecoilState(newSelectedData);
  const [showStudentList, setShowStudentList] = useState<boolean>(false);
  const [showCategoryName, setShowCategoryName] = useState<boolean>(false);
  const [categoryData, setCategoryData] = useRecoilState(newCategoryData);
  const [memberData, setMemberData] = useRecoilState(newMemberData);
  const [permission, setPermission] = useRecoilState(MemberId);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [searchMember, setSearchMember] = useState<string>("");
  const [viewPermission, setViewPermission] = useState(false);
  const [GradeName, setGradeName] = useState<string>("");
  const [selectedStudents, setSelectedStudents] = useRecoilState(newStudent);
  const [selectAccess, setSelectAccess] = useState<string | null>(null);
  const [memberInfo, setMemberInfo] = useRecoilState(newMemberInfo);
  const [memberCnt, setMemberCnt] = useState<number>();
  const [room, setRoom] = useState<string>("");

  const getCategoryList = async () => {
    try {
      await alimoV1Axios.get(`/category/get-category?page=${1}&size=${15}&searchKeyword=`).then((res) => {
        setCategoryData(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryClick = async (categoryName: string) => {
    try {
      await alimoV1Axios
        .get(`/category/get-member?page=${1}&size=${15}&categoryName=${categoryName}&searchKeyword=`)
        .then((res) => {
          if (categoryName === "학부모") {
            setGradeName("학부모");
          } else if (categoryName === "선생님") {
            setGradeName("선생님");
          } else {
            setGradeName("학번");
          }
          setMemberData(res.data.data);
        });
      setIsClickedCategory(categoryName);
    } catch (e) {
      showToast("error", "서버 연결오류");
    }
  };

  const onSearchMemberName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMember(e.target.value);
  };

  const handleGetMemberData = async () => {
    try {
      await alimoV1Axios
        .get(`category/get-member?page=${1}&size=${15}&categoryName=${isClickedCategory}&searchKeyword=${searchMember}`)
        .then((res) => {
          setMemberData(res.data.data);
        });
      console.log(
        memberData.map((mem) => mem.id),
        selectedStudents.map((std) => std.id),
        memberInfo.map((memb) => memb.memberId),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const OnCategoryName = async () => {
    setShowCategoryName((prev) => !prev);
  };

  const SearchCategoryName = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleGetCategoryList = async () => {
    try {
      await alimoV1Axios
        .get(`/category/get-category?page=${1}&size=${15}&searchKeyword=${searchKeyword}`)
        .then((res) => {
          setCategoryData(res.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletetCategory = async () => {
    await Swal.fire({
      title: "정말 카테고리를 삭제하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
      confirmButtonColor: "#FFE8E8",
      preConfirm: async () => {
        try {
          await alimoV1Axios
            .delete("/category/delete", {
              params: {
                category: isClickedCategory,
              },
            })
            .then(() => {
              window.location.reload();
            });
        } catch (error) {
          showToast("error", "서버 통신 오류");
        }
      },
    });
  };

  const onClickAddStudent = (studentId: number) => {
    setSelectedStudents((prev) => [...prev, { id: studentId }]);
  };

  const onClickAccess = (access: string) => {
    setSelectAccess((prevAccess) => (access === prevAccess ? null : access));
  };

  const onLoadStudentInfo = async (grade: number, cls: number) => {
    await alimoV1Axios
      .get(`/member/student-list`, {
        params: {
          page: 1,
          size: 15,
          grade: grade,
          room: cls,
        },
      })
      .then((res) => {
        setMemberInfo(res.data.data.memberList);
        setRoom(`${cls}반`);
        memberInfo.map((member) => {
          setMemberCnt(member.cnt);
        });
      });
  };

  const onLoadMemberInfo = async (role: string) => {
    await alimoV1Axios
      .get(`member/${role}-list`, {
        params: {
          page: 1,
          size: 1,
        },
      })
      .then((res) => {
        setMemberInfo(res.data.data);
      });
  };

  const handlePermission = (memberId: number) => {
    setPermission(memberId);
    setViewPermission((prev) => !prev);
  };

  const handleViewPermission = () => {
    setViewPermission((prev) => !prev);
  };

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

  // const handleDeleteMember = async () => {
  //   try {
  //     await alimoV1Axios.delete("category/delete-member", {
  //       data: {
  //         memberId: memberData.map((member) => member.id),
  //         categoryName: isClickedCategory,
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return {
    GradeName,
    isClickedCategory,
    categoryData,
    permission,
    searchKeyword,
    memberData,
    showCategoryName,
    searchMember,
    viewPermission,
    selectedStudents,
    selectAccess,
    memberInfo,
    memberCnt,
    room,
    getCategoryList,
    onClickAddStudent,
    onClickAccess,
    onLoadStudentInfo,
    onLoadMemberInfo,
    onSearchMemberName,
    handleGetMemberData,
    handleCategoryClick,
    OnCategoryName,
    SearchCategoryName,
    handleGetCategoryList,
    handlePermission,
    handleViewPermission,
    handleDeletetCategory,
    // handleGivePermission,
    // handleDeleteMember,
  };
};

export default useCategoryManage;
