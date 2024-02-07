import { useState } from "react";

const useCategory = () => {
  const [categoryClicked, setCategoryClicked] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>("");

  const handleCategoryName = (categoryName: string) => {
    setCategoryName(categoryName);
  };

  const handleCategoryClick = () => {
    setCategoryClicked(!categoryClicked);
  };

  return {
    categoryClicked,
    handleCategoryName,
    handleCategoryClick,
  };
};

export default useCategory;
