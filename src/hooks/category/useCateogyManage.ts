import React, { useCallback, useEffect, useMemo, useState } from "react";
import { showToast } from "src/libs/toast/swal";
import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import Swal from "sweetalert2";
import { useRecoilState } from "recoil";
import {
  CategoryDataAtom,
  MemberData,
  MemberId,
  Permission,
  ShowCategoryName,
  newSelectedData,
} from "src/store/category/category.store";
import { CategoryData, MemberInCategoryData } from "src/types/categorys/interface";
import { MemberInfo, Student } from "src/types/categorys/add.types";
import { SortMember } from "src/utils/sort/memberSort";

const useCategoryManage = () => {
  const [isClickedCategory, setIsClickedCategory] = useRecoilState(newSelectedData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isMemberLoading, setIsMemberLoading] = useState<boolean>(true);
  const [clickedCategory, setClickedCategory] = useState<string | null>(null);
  const [showCategoryName, setShowCategoryName] = useRecoilState(ShowCategoryName);
  const [categoryData, setCategoryData] = useRecoilState(CategoryDataAtom);
  const [filteredCategory, setFilteredCategory] = useState<CategoryData[]>([]);
  const [filteredMember, setFilteredMember] = useState<MemberInCategoryData[]>([]);
  const [memberData, setMemberData] = useRecoilState(MemberData);
  const [permissoinToMemb, setPermissoinToMemb] = useRecoilState(MemberId);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [searchMember, setSearchMember] = useState<string>("");
  const [permission, setPermission] = useRecoilState(Permission);
  const [GradeName, setGradeName] = useState<string>("");
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const [selectAccess, setSelectAccess] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [isPageLoading, setIsPageLoading] = useState<boolean>(false);

  const getCategoryList = async () => {
    try {
      await alimoV1Axios.get(`/category/get-category?page=1&size=1000&searchKeyword=`).then((res) => {
        setCategoryData(res.data.data);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];

    if (target.isIntersecting && !isPageLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0,
    });

    const observerTarget = document.getElementById("observe");

    if (observerTarget) {
      observer.observe(observerTarget);
    }
  }, []);

  const handleCategoryClick = async (categoryName: string) => {
    setIsPageLoading(true);
    if (clickedCategory === categoryName) {
      setClickedCategory(null);
      setIsClickedCategory("");
    } else if (categoryName === "" || categoryName === undefined) {
      return;
    } else {
      try {
        await alimoV1Axios
          .get(`/category/get-member?page=${page}&size=200&categoryName=${categoryName}&searchKeyword=`)
          .then((res) => {
            if (categoryName === "학부모") {
              setGradeName("학부모");
            } else if (categoryName === "선생님") {
              setGradeName("선생님");
            } else {
              setGradeName("학번");
            }
            setMemberData(SortMember(res.data.data)!!);
          });
        setIsClickedCategory(categoryName);
        setClickedCategory(categoryName);
        setIsMemberLoading(false);
      } catch (e) {
        showToast("error", "서버 연결오류");
      }
    }
    setIsPageLoading(false);
  };

  useEffect(() => {
    handleCategoryClick(isClickedCategory);
  }, [page]);

  const onSearchMemberName = (value: string) => {
    setSearchMember(value);
  };

  const handleGetMemberData = async () => {
    if (searchMember !== "") {
      const filteredData = memberData.filter((item) => {
        return Object.values(item).join("").toLowerCase().includes(searchMember.toLowerCase());
      });
      setFilteredMember(SortMember(filteredData)!!);
    } else {
      setFilteredMember(SortMember(memberData)!!);
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
    setMemberData([]);
    setClickedCategory(null);
    setIsClickedCategory("");
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
            .then(async () => {
              await alimoV1Axios
                .get(`/category/get-category?page=1&size=1000&searchKeyword=`)
                .then((res) => {
                  setCategoryData(res.data.data);
                })
                .then(() => showToast("success", "카테고리 삭제 성공"));
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

  const handleMemberId = async (memberId: number, permission: string) => {
    setPermissoinToMemb(memberId);
    setPermission(permission);

    await Swal.fire({
      title: permission === "ACCESS_MEMBER" ? "멤버 권한부여 또는 멤버 삭제하기" : "권한 삭제 또는 멤버 삭제하기",
      showCancelButton: false,
      confirmButtonText: permission === "ACCESS_MEMBER" ? "권한 부여" : "권한 삭제",
      denyButtonText: "멤버 삭제",
      showDenyButton: true,
      confirmButtonColor: "#d1d1d1",
      denyButtonColor: "#F40240",
      preConfirm: async () => {
        try {
          if (permission === "ACCESS_MEMBER") {
            await alimoV1Axios
              .patch("/permission/change-admin", {
                memberId: memberId,
                categoryName: isClickedCategory,
              })
              .then(async () => {
                await alimoV1Axios
                  .get(`/category/get-member?page=1&size=1000&categoryName=${isClickedCategory}&searchKeyword=`)
                  .then((res) => {
                    setMemberData(SortMember(res.data.data)!!);
                  });
              })
              .then(() => {
                showToast("success", "권한 부여 성공");
              });
          } else {
            await alimoV1Axios
              .patch("/permission/change-student", {
                memberId: memberId,
                categoryName: isClickedCategory,
              })
              .then(async () => {
                await alimoV1Axios
                  .get(`/category/get-member?page=1&size=1000&categoryName=${isClickedCategory}&searchKeyword=`)
                  .then((res) => {
                    setMemberData(SortMember(res.data.data)!!);
                  });
              })
              .then(() => {
                showToast("success", "권한 삭제 성공");
              });
          }
        } catch (error) {
          showToast("error", "서버 통신 오류");
        }
      },
      preDeny: async () => {
        try {
          await alimoV1Axios
            .delete("/category/delete-member", {
              data: {
                memberList: [memberId],
                categoryName: isClickedCategory,
              },
            })
            .then(async () => {
              try {
                await alimoV1Axios
                  .get(`/category/get-member?page=1&size=1000&categoryName=${isClickedCategory}&searchKeyword=`)
                  .then((res) => {
                    setMemberData(SortMember(res.data.data)!!);
                  });
                await alimoV1Axios.get(`/category/get-category?page=1&size=1000&searchKeyword=`).then((res) => {
                  setCategoryData(res.data.data);
                });
              } catch (error) {
                console.log(error);
              }
            })
            .then(() => {
              showToast("success", "멤버가 삭제되었습니다.");
            });
        } catch (error) {
          showToast("error", "서버 통신 오류");
        }
      },
    });
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
    selectedStudents,
    selectAccess,
    filteredCategory,
    filteredMember,
    isLoading,
    isMemberLoading,
    setMemberData,
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
    handleDeletetCategory,
  };
};

export default useCategoryManage;
