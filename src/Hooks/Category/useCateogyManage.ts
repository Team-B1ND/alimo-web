import { useState } from "react";
import Swal from "sweetalert2";

const useCategoryManage = () => {
  const [isClickedCategory, setIsClickedCategory] = useState<string | null>(null);
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
      setShowStudentList(true);
      setIsAddStudent(!isAddStudent);
    }
  };

  const onClose = () => {
    setShowStudentList(false);
  };

  return {
    isClickedCategory,
    handleCategoryClick,
    onClickNewCategoryButton,
    showStudentList,
    setShowStudentList,
    onClose,
  };
};

export default useCategoryManage;
