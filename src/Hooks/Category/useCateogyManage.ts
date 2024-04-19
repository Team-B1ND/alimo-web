import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import CONFIG from "src/config/config.json";
import { showToast } from "src/lib/Toast/Swal";
import {
  CategoryData,
  MemberInCategoryData,
} from "src/types/Category/interface";
import { alimoV1Axios } from "src/lib/Axios/customAxios";

const useCategoryManage = () => {
  const [isClickedCategory, setIsClickedCategory] = useState<string | null>(
    null
  );
  const [createCategoryName, setCreateCategoryName] = useState<string>("");
  const [showStudentList, setShowStudentList] = useState<boolean>(false);
  const [showCategoryName, setShowCategoryName] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string | string[]>("");
  const [memberCnt, setMemberCnt] = useState<number>();
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [memberData, setMemberData] = useState<MemberInCategoryData[]>([]);
  const [name, setName] = useState<string>("");
  const [grade, setGrade] = useState<number>();
  const [cls, setCls] = useState<number>();
  const [permission, setPermission] = useState<string>("");
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [viewPermission, setViewPermission] = useState(false);
  const [memberList, setMemberList] = useState<boolean>(false);
  const [GradeName, setGradeName] = useState<string>("");
  useEffect(() => {
    getCategoryList();
  }, []);

  const handleCategoryClick = async (categoryName: string) => {
    setIsClickedCategory(categoryName);

    try {
      await alimoV1Axios
        .get(
          `${
            CONFIG.serverUrl
          }/category/get-member?page=${1}&size=${15}&categoryName=${categoryName}&searchKeyword=`
        )
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

  const OnCategoryName = async () => {
    setShowCategoryName((prev) => !prev);
  };

  const SearchCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateCategoryName(e.target.value);
  };

  const onChangeSearchCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };
  const [SearchData, setSearchData] = useState("");
  const SearchCategory = async () => {
    try {
      await alimoV1Axios
        .get(
          `${CONFIG.serverUrl}/category/get-category?page=1&size=1&searchKeyword=${searchKeyword}`
        )
        .then((res) => {
          setSearchData(res.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getCategoryList = async () => {
    try {
      await alimoV1Axios
        .get(
          `${
            CONFIG.serverUrl
          }/category/get-category?page=${1}&size=${15}&searchKeyword=`
        )
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
    createCategoryName,
    categoryName,
    memberCnt,
    categoryData,
    name,
    grade,
    cls,
    permission,
    searchKeyword,
    showStudentList,
    memberData,
    showCategoryName,
    memberList,
    SearchData,
    setShowStudentList,
    handleCategoryClick,
    OnCategoryName,
    onChangeSearchCategoryName,
    SearchCategory,
    handlePopUp,
    onClose,
    SearchCategoryName,
  };
};

export default useCategoryManage;

