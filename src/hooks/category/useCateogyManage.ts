import React, { useEffect, useState } from "react";
import { showToast } from "src/libs/toast/swal";
import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import Swal from "sweetalert2";
import { useRecoilState } from "recoil";
import { MemberId, Permission, ShowCategoryName, newSelectedData } from "src/store/category/category.store";
import { CategoryData, MemberInCategoryData } from "src/types/categorys/interface";
import { MemberInfo, Student } from "src/types/categorys/add.types";

const useCategoryManage = () => {
  const [isClickedCategory, setIsClickedCategory] = useRecoilState(newSelectedData);
  const [clickedCategory, setClickedCategory] = useState<string | null>(null);
  const [showCategoryName, setShowCategoryName] = useRecoilState(ShowCategoryName);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [filteredCategory, setFilteredCategory] = useState<CategoryData[]>([]);
  const [filteredMember, setFilteredMember] = useState<MemberInCategoryData[]>([]);
  const [memberData, setMemberData] = useState<MemberInCategoryData[]>([]);
  const [permissoinToMemb, setPermissoinToMemb] = useRecoilState(MemberId);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [searchMember, setSearchMember] = useState<string>("");
  const [viewPermission, setViewPermission] = useState(false);
  const [permission, setPermission] = useRecoilState(Permission);
  const [GradeName, setGradeName] = useState<string>("");
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const [selectAccess, setSelectAccess] = useState<string | null>(null);
  const [memberInfo, setMemberInfo] = useState<MemberInfo[]>([]);
  const [memberCnt, setMemberCnt] = useState<number>();
  const [room, setRoom] = useState<string>("");

  const getCategoryList = async () => {
    try {
      await alimoV1Axios.get(`/category/get-category?page=${1}&size=${1000}&searchKeyword=`).then((res) => {
        setCategoryData(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryClick = async (categoryName: string) => {
    if (clickedCategory === categoryName) {
      setClickedCategory(null);
      setIsClickedCategory("");
    } else {
      try {
        await alimoV1Axios
          .get(`/category/get-member?page=${1}&size=${1000}&categoryName=${categoryName}&searchKeyword=`)
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
        setClickedCategory(categoryName);
      } catch (e) {
        showToast("error", "서버 연결오류");
      }
    }
  };

  const onSearchMemberName = (value: string) => {
    setSearchMember(value);
  };

  const handleGetMemberData = async () => {
    if (searchMember !== "") {
      const filteredData = memberData.filter((item) => {
        return Object.values(item).join("").toLowerCase().includes(searchMember.toLowerCase());
      });
      setFilteredMember(filteredData);
    } else {
      setFilteredMember(memberData);
    }
  };

  const handGetCategoryList = () => {
    if (searchKeyword !== "") {
      const filteredData = categoryData.filter((item) => {
        return Object.values(item).join("").toLowerCase().includes(searchKeyword.toLowerCase());
      });
      setFilteredCategory(filteredData);
    } else {
      setFilteredCategory(categoryData);
    }
  };

  const OnCategoryName = async () => {
    setShowCategoryName((prev) => !prev);
  };

  const SearchCategoryName = async (value: string) => {
    setSearchKeyword(value);
  };

  const handleDeletetCategory = async (categoryName: string) => {
    await Swal.fire({
      title: "정말 카테고리를 삭제하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
      confirmButtonColor: "#F40240",
      preConfirm: async () => {
        try {
          await alimoV1Axios
            .delete("/category/delete", {
              params: {
                category: categoryName,
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
    setSelectedStudents((prev) => [...prev, { id: studentId, name: "" }]);
  };

  const onClickAccess = (access: string) => {
    setSelectAccess((prevAccess) => (access === prevAccess ? null : access));
  };

  const handleMemberId = (memberId: number, permission: string) => {
    setPermissoinToMemb(memberId);
    setPermission(permission);
    setViewPermission((prev) => !prev);
  };

  const handleViewPermission = () => {
    setViewPermission((prev) => !prev);
  };

  return {
    GradeName,
    isClickedCategory,
    clickedCategory,
    categoryData,
    permissoinToMemb,
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
    filteredCategory,
    filteredMember,
    getCategoryList,
    onClickAddStudent,
    handGetCategoryList,
    onClickAccess,
    onSearchMemberName,
    handleGetMemberData,
    handleCategoryClick,
    OnCategoryName,
    SearchCategoryName,
    handleMemberId,
    handleViewPermission,
    handleDeletetCategory,
  };
};

export default useCategoryManage;
