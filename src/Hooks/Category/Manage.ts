import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import CONFIG from "src/config/config.json";
import { showToast } from "src/lib/Toast/Swal";
import { CategoryData, MemberInCategoryData } from "src/types/Category/interface";
import { alimoV1Axios } from "src/lib/axios/CustomAxios";

const useCategoryManage = () => {
  const [isClickedCategory, setIsClickedCategory] = useState<string | null>(null);
  const [createCategoryName, setCreateCategoryName] = useState<string>("");
  const [showStudentList, setShowStudentList] = useState<boolean>(false);
  const [showCategoryName, setShowCategoryName] = useState<boolean>(false);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [memberData, setMemberData] = useState<MemberInCategoryData[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [viewPermission, setViewPermission] = useState(false);

  useEffect(() => {
    getCategoryList();
  }, []);

  //카테고리 클릭시 멤버리스트 뜨는 로직
  const handleCategoryClick = async (categoryName: string) => {
    setIsClickedCategory(categoryName);

    try {
      await alimoV1Axios
        .get(`/category/get-member?page=${1}&size=${15}&categoryName=${categoryName}&searchKeyword=`)
        .then((res) => {
          setMemberData(res.data.data);
        });
    } catch (e) {
      showToast("error", "서버 연결오류");
    }
  };

  //카테고리 생성 시 사용되는 모달 팝업 로직
  const OnCategoryName = async () => {
    setShowCategoryName((prev) => !prev);
  };

  //카테고리 생성 시 사용되는 인풋 로직
  const OnChangeCreateCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateCategoryName(e.target.value);
  };

  // 카테고리 검색 인풋 로직
  const onChangeSearchCategoryName = (e: any) => {
    setSearchKeyword(e.target.value);
  };

  //카테고리 검색 로직
  const SearchCategory = async () => {
    try {
      await alimoV1Axios.get(`${CONFIG.serverUrl}/category/get-category?page=1&size=1&searchKeyword=${searchKeyword}`);
    } catch (e) {
      showToast("eror", "서버 통신 오류");
    }
  };

  //카테고리 불러오는 로직
  const getCategoryList = async () => {
    try {
      await alimoV1Axios
        .get(`${CONFIG.serverUrl}/category/get-category?page=${1}&size=${15}&searchKeyword=`)
        .then((res) => {
          setCategoryData(res.data.data);
        });
    } catch (e) {
      showToast("error", "서버연결 오류");
    }
  };

  //권한 부여할 때 사용되는 모달 팝업 로직
  const HandleViewPermission = () => {
    setViewPermission((prev) => !prev);
  };

  //카테고리 추가, 학생추가 때 사용되는 모달 팝업 로직
  const handlePopUp = () => {
    setShowStudentList(!showStudentList);
  };

  //카테고리 추가할때 사용하는 인풋모달 팝업 로직
  const onClose = () => {
    setShowStudentList((prev) => !prev);
    setShowCategoryName(false);
  };

  return {
    isClickedCategory,
    createCategoryName,
    categoryData,
    searchKeyword,
    showStudentList,
    memberData,
    showCategoryName,
    setShowStudentList,
    handleCategoryClick,
    OnCategoryName,
    onChangeSearchCategoryName,
    SearchCategory,
    handlePopUp,
    onClose,
    OnChangeCreateCategoryName,
  };
};

export default useCategoryManage;
