import { showToast } from "src/lib/Toast/Swal";
import { useState } from "react";
import Swal from "sweetalert2";

const useCategoryManage = () => {
  const [isClickedCategory, setIsClickedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    setIsClickedCategory(categoryName);
  };

  const onClickNewCategoryButton = async () => {
    const { value: getName } = await Swal.fire({
      title: "카테고리명을 입력해주세요.",
      input: "text",
      inputPlaceholder: "카테고리명",
      confirmButtonText: "다음",
      cancelButtonColor: "#000",
    });

    if (getName) {
      showToast("success", "카테고리가 성공적으로 생성되었습니다!");
    }
  };

  return {
    isClickedCategory,
    handleCategoryClick,
    onClickNewCategoryButton,
  };
};

export default useCategoryManage;
