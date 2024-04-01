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
  const [permission, setPermission] = useState<string>("");
  const [searchKeyword, setSearchKeyword] = useState<string | null>(null);
  const [searchMember, setSearchMember] = useState("");
  const [viewPermission, setViewPermission] = useState(false);
  const [GradeName, setGradeName] = useState<string>("");
  const [SearchData, setSearchData] = useState("");

  useEffect(() => {
    getCategoryList();
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

  const OnCategoryName = async () => {
    setShowCategoryName((prev) => !prev);
  };

  const CreateCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateCategoryName(e.target.value);
  };

  const SearchCategoryName = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const OnClickSearchCategory = async () => {
    if (searchKeyword?.length === 0) {
      setSearchKeyword(null);
    }

    try {
      await alimoV1Axios.get(`/category/get-category?page=1&size=1&searchKeyword=${searchKeyword}`).then((res) => {
        setSearchData(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getCategoryList = async () => {
    try {
      await alimoV1Axios
        .get(`${CONFIG.serverUrl}/category/get-category?page=${1}&size=${15}&searchKeyword=`)
        .then((res) => {
          setCategoryData(res.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getMemberInCategory = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMember(e.target.value);

    try {
      await alimoV1Axios
        .get(`/category/get-member?page=1&size=1&categoryName=${isClickedCategory}&searchKeyword=${searchMember}`)
        .then((res) => {
          setMemberData(res.data.data);
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
    categoryData,
    permission,
    searchKeyword,
    showStudentList,
    memberData,
    showCategoryName,
    SearchData,
    searchMember,
    getMemberInCategory,
    setShowStudentList,
    handleCategoryClick,
    OnCategoryName,
    handlePopUp,
    onClose,
    SearchCategoryName,
    CreateCategoryName,
    OnClickSearchCategory,
    HandleViewPermission,
  };
};

export default useCategoryManage;
