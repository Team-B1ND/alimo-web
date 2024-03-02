import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import CONFIG from "src/config/config.json";

const useCategoryManage = () => {
  const [isClickedCategory, setIsClickedCategory] = useState<string | null>(null);
  const [categoryName, setCategoryName] = useState<string>("");
  const [showStudentList, setShowStudentList] = useState<boolean>(false);
  const [isAddStudent, setIsAddStudent] = useState<boolean>(false);
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
      setCategoryName(getName);
      setIsAddStudent(!isAddStudent);
      setShowStudentList(!showStudentList);
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
    categoryName,
    handleCategoryClick,
    onClickNewCategoryButton,
    showStudentList,
    handlePopUp,
    onClose,
  };
};

export default useCategoryManage;
