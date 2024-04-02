import React, { useEffect, useState } from "react";
import CONFIG from "src/config/config.json";
import { showToast } from "src/lib/Toast/Swal";
import { CategoryData, MemberInCategoryData } from "src/types/Category/interface";
import { alimoV1Axios } from "src/lib/axios/CustomAxios";
import axios from "axios";
import { MemberInfo } from "@src/types/Category/Add.types";
import Swal from "sweetalert2";

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
  const [memberId, setMemberId] = useState<MemberInfo[]>([]);

  useEffect(() => {
    handleGetCategoryList();
  }, []);

  const handleCategoryClick = async (categoryName: string) => {
    setIsClickedCategory(categoryName);

    try {
      await alimoV1Axios
        .get(`${CONFIG.serverUrl}/category/get-member?page=${1}&size=${15}&categoryName=${categoryName}&searchKeyword=`)
        .then((res) => {
          console.log(res.data.data);

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

  const handleGivePermission = async () => {
    if (permission === "ACCESS_MEMBER") {
      try {
        await alimoV1Axios.patch("/permission/change-admin", {
          memberId: memberId.map((member) => member.memberId),
          categoryName: null,
        });
        console.log(permission);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await alimoV1Axios.patch("permission/change-student", {
          memberId: memberId.map((member) => member.memberId),
          categoryName: null,
        });
        console.log(permission);
      } catch (error) {
        console.log(error);
      }
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
    handleGivePermission,
    handleDeletetCategory,
  };
};

export default useCategoryManage;
