import { useState } from "react";

const useCategoryManage = () => {
  const [isClickedCategory, setIsClickedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    setIsClickedCategory(categoryName);
  };

  return {
    isClickedCategory,
    handleCategoryClick,
  };
};

export default useCategoryManage;
