import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import CONFIG from "src/config/config.json";
import { showToast } from "src/lib/Toast/Swal";
import { CategoryData, MemberInCategoryData } from "src/types/Category/interface";
import { alimoV1Axios } from "src/lib/axios/customAxios";

const useCategoryManage = () => {
  const [isClickedCategory, setIsClickedCategory] = useState<string | null>(null);
  const [createCategoryName, setCreateCategoryName] = useState<string>("");
  const [showStudentList, setShowStudentList] = useState<boolean>(false);
  const [isAddStudent, setIsAddStudent] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string | string[]>("");
  const [memberCnt, setMemberCnt] = useState<number>();
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [memberData, setMemberData] = useState<MemberInCategoryData[]>([]);
  const [name, setName] = useState<string>("");
  const [grade, setGrade] = useState<number>();
  const [cls, setCls] = useState<number>();
  const [permission, setPermission] = useState<string>("");
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  useEffect(() => {
    getCategoryList();
  }, []);

  const handleCategoryClick = async (categoryName: string) => {
    setIsClickedCategory(categoryName);

    try {
      const reponse = await alimoV1Axios.get(
        `${CONFIG.serverUrl}/category/get-member?page=${1}&size=${15}&categoryName=${categoryName}&searchKeyword=`,
      );
      if (reponse.status === 200) {
        setMemberData(reponse.data.data);
        showToast("success", "멤버 불러오기 성공");
      } else {
        showToast("error", "멤버 불러오기 실패");
      }
    } catch (e) {
      showToast("error", "서버 연결오류");
    }
  };

  const onClickNewCategoryButton = async () => {
    const { value: getName } = await Swal.fire({
      title: "카테고리명을 입력해주세요.",
      input: "text",
      inputPlaceholder: "카테고리명",
      showCancelButton: true,
      cancelButtonColor: "#787878",
      cancelButtonText: "취소",
      confirmButtonText: "다음",
      confirmButtonColor: "#FECE23",
    });

    if (getName) {
      setCreateCategoryName(getName);
      setIsAddStudent(!isAddStudent);
      setShowStudentList(!showStudentList);
    }
  };

  const onChangeSearchCategoryName = (e: any) => {
    setSearchKeyword(e.target.value);
  };

  const SearchCategory = async () => {
    try {
      const response = await alimoV1Axios.get(
        `${CONFIG.serverUrl}/category/get-category?page=1&size=1&searchKeyword=${searchKeyword}`,
      );
      if (response.status === 200) {
        showToast("sucess", "카테고리 검색 성공!");
      } else {
        showToast("eror", "검색 실패");
      }
    } catch (e) {
      showToast("eror", "서버 통신 오류");
    }
  };

  const getCategoryList = async () => {
    try {
      const response = await alimoV1Axios.get(
        `${CONFIG.serverUrl}/category/get-category?page=${1}&size=${15}&searchKeyword=`,
      );
      if (response.status === 200) {
        setCategoryData(response.data.data);
        showToast("success", "카테고리 불러오기 성공!");
      } else {
        showToast("error", "카테고리 불러오기 실패");
      }
    } catch (e) {
      showToast("error", "서버연결 오류");
    }
  };

  const handlePopUp = () => {
    setShowStudentList(!showStudentList);
  };

  const onClose = () => {
    setShowStudentList(false);
  };

  return {
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
    handleCategoryClick,
    onClickNewCategoryButton,
    onChangeSearchCategoryName,
    SearchCategory,
    showStudentList,
    handlePopUp,
    onClose,
    memberData,
  };
};

export default useCategoryManage;
