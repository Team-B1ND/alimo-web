import React, { useEffect, useState } from "react";
import { showToast } from "src/libs/Toast/Swal";
import { CategoryData, MemberInCategoryData } from "@src/Types/Category/interface";
import { Student, MemberInfo } from "@src/Types/Category/Add.types";
import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import Swal from "sweetalert2";
import axios from "axios";

const useCategoryManage = () => {
  const [isClickedCategory, setIsClickedCategory] = useState<string | null>(null);
  const [showStudentList, setShowStudentList] = useState<boolean>(false);
  const [showCategoryName, setShowCategoryName] = useState<boolean>(false);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [memberData, setMemberData] = useState<MemberInCategoryData[]>([]);
  const [permission, setPermission] = useState<string>("");
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [searchMember, setSearchMember] = useState<string>("");
  const [viewPermission, setViewPermission] = useState(false);
  const [GradeName, setGradeName] = useState<string>("");
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const [selectAccess, setSelectAccess] = useState<string | null>(null);
  const [createCategoryName, setCreateCategoryName] = useState<string>("");
  const [memberInfo, setMemberInfo] = useState<MemberInfo[]>([]);
  const [memberCnt, setMemberCnt] = useState<number>();
  const [room, setRoom] = useState<string>("");

  useEffect(() => {
    handleGetCategoryList();
  }, []);

  const handleCategoryClick = async (categoryName: string) => {
    setIsClickedCategory(categoryName);
    console.log(isClickedCategory);
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
    } catch (e) {
      showToast("error", "서버 연결오류");
    }
  };

  const onSearchMemberName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMember(e.target.value);
  };

  const handleGetMemberData = async () => {
    console.log(searchMember);

    try {
      await alimoV1Axios
        .get(
          `category/get-member?page=${1}&size=${15}&categoryName=${isClickedCategory}&searchkeyword=${String(
            searchMember,
          )}`,
        )
        .then((res) => {
          setMemberData(res.data.data);
          memberData.map((member) => {
            setPermission(member.permission);
          });
        });
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

  const HandleViewPermission = () => {
    setViewPermission((prev) => !prev);
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
                category: categoryData.map((category) => category.categoryName),
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
    const newStudent = { id: studentId };
    setSelectedStudents([...selectedStudents, newStudent]);
  };

  const onClickAccess = (access: string) => {
    setSelectAccess((prevAccess) => (access === prevAccess ? null : access));
  };

  const handleChangeCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateCategoryName(e.target.value);

    console.log(createCategoryName);
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

  const handleGivePermission = async () => {
    if (permission === "ACCESS_MEMBER") {
      try {
        await alimoV1Axios.patch("/permission/change-admin", {
          memberId: selectedStudents.map((member) => member.id),
          categoryName: createCategoryName,
        });
        console.log(permission);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await alimoV1Axios.patch("permission/change-student", {
          memberId: selectedStudents.map((member) => member.id),
          categoryName: createCategoryName,
        });
        console.log(permission);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDeleteMember = async () => {
    try {
      await alimoV1Axios.delete("category/delete-member", {
        data: {
          memberId: selectedStudents.map((member) => member.id),
          categoryName: createCategoryName,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onClickAddCategory = async () => {
    try {
      await alimoV1Axios
        .post("/category/create", {
          memberList: selectedStudents.map((member) => member.id),
          categoryName: createCategoryName,
        })
        .then(() => {
          setShowStudentList(false);
        });
    } catch (e) {
      showToast("error", "서버 통신 오류");
    }
  };

  const handlePopUp = () => {
    setShowStudentList(!showStudentList);
  };

  const onClose = () => {
    setShowStudentList((prev) => !prev);
    setShowCategoryName(false);
  };

  return {
    GradeName,
    isClickedCategory,
    categoryData,
    permission,
    searchKeyword,
    showStudentList,
    memberData,
    showCategoryName,
    searchMember,
    viewPermission,
    createCategoryName,
    selectedStudents,
    selectAccess,
    memberInfo,
    memberCnt,
    room,
    handleChangeCategoryName,
    onClickAddStudent,
    onClickAccess,
    onLoadStudentInfo,
    onLoadMemberInfo,
    onSearchMemberName,
    setShowStudentList,
    handleGetMemberData,
    handleCategoryClick,
    OnCategoryName,
    handlePopUp,
    onClose,
    SearchCategoryName,
    handleGetCategoryList,
    HandleViewPermission,
    handleDeletetCategory,
    handleGivePermission,
    handleDeleteMember,
    onClickAddCategory,
  };
};

export default useCategoryManage;
