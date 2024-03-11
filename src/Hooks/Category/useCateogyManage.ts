import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import CONFIG from "src/config/config.json";
import { showToast } from "src/lib/Toast/Swal";
import { CategoryData } from "src/types/Category/interface";
const useCategoryManage = () => {
  const [isClickedCategory, setIsClickedCategory] = useState<string | null>(null);
  const [createCategoryName, setCreateCategoryName] = useState<string>("");
  const [showStudentList, setShowStudentList] = useState<boolean>(false);
  const [isAddStudent, setIsAddStudent] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>("");
  const [memberCnt, setMemberCnt] = useState<number>();
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const handleCategoryClick = (categoryName: string) => {
    setIsClickedCategory(categoryName);
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

  const getCategoryList = async () => {
    try {
      const response = await axios.get(`${CONFIG.serverUrl}/category/get-category`, {
        params: {
          page: 1,
          size: 10,
          searchKeyword: "null",
        },
        headers: {
          Authorization: `Bearer eyJKV1QiOiJBQ0NFU1MiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiQXV0aG9yaXphdGlvbiI6IlRFQUNIRVIiLCJpYXQiOjE3MTAxNTE3MTIsImV4cCI6MTcxMDE1MzUxMn0.TaquYPZAXy98GL7hpqmWVXHmYX7YDu0dTivd_bf9yhKQICY7-_a2fha9t4efEQxJqcsYjkDgxN0TcatX1m0QZQ"`,
        },
      });
      if (response.status === 200) {
        setCategoryData([response.data]);
        categoryData.map((category) => {
          setCategoryName(category.categoryName);
          setMemberCnt(category.memberCnt);
          return {
            categoryName,
            setMemberCnt,
          };
        });
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
    handleCategoryClick,
    onClickNewCategoryButton,
    showStudentList,
    handlePopUp,
    onClose,
  };
};

export default useCategoryManage;
