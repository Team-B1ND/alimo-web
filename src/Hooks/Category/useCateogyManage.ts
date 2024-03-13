import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import CONFIG from "src/config/config.json";
import { showToast } from "src/lib/Toast/Swal";
import { CategoryData, MemberInCategoryData } from "src/types/Category/interface";
const useCategoryManage = () => {
  const [isClickedCategory, setIsClickedCategory] = useState<string | null>(null);
  const [createCategoryName, setCreateCategoryName] = useState<string>("");
  const [showStudentList, setShowStudentList] = useState<boolean>(false);
  const [isAddStudent, setIsAddStudent] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>("");
  const [memberCnt, setMemberCnt] = useState<number>();
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [memberData, setMemberData] = useState<MemberInCategoryData[]>([]);
  const [name, setName] = useState<string>("");
  const [grade, setGrade] = useState<number>();
  const [cls, setCls] = useState<number>();
  const [permission, setPermission] = useState<string>("");

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
          size: 1,
          searchKeyword: "null",
        },
        headers: {
          Authorization: `Bearer eyJKV1QiOiJBQ0NFU1MiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiQXV0aG9yaXphdGlvbiI6IlRFQUNIRVIiLCJpYXQiOjE3MTAxNjc3MjcsImV4cCI6MTcxMDE2OTUyN30.35yo4lW7gOSsryvaFtKpCjIXRWq3B7eQpKhQGjKbQ9Pq_wLO9GHILvtzEvC5z-qBMB7wRSiwuopI-qwMor_gzw"`,
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

  const getMember = async () => {
    try {
      const response = await axios.get(`${CONFIG.serverUrl}/category/get-member`, {
        params: {
          page: 1,
          size: 1,
          categoryName: categoryName,
          searchKeyword: "null",
        },
      });
      if (response.status === 200) {
        setMemberData([response.data]);
        memberData.map((member) => {
          setName(member.name);
          setGrade(member.grade);
          setCls(member.room);
          setPermission(member.permission);
        });
      }
    } catch (e) {}
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
    handleCategoryClick,
    onClickNewCategoryButton,
    showStudentList,
    handlePopUp,
    onClose,
    getMember,
    memberData,
  };
};

export default useCategoryManage;
