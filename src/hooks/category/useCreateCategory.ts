import patternCheck from "src/utils/patternCheck/patternCheck";
import React from "react";
import { useRecoilState } from "recoil";
import { newCategoryNameState } from "src/store/category/category.store";
const useCreateCategory = () => {
  const [createCategoryName, setCreateCategoryName] = useRecoilState(newCategoryNameState);

  const handleChangeCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!patternCheck.categoryNameCheck(e.target.value)) {
      setCreateCategoryName(e.target.value);
    }
  };

  return {
    createCategoryName,
    handleChangeCategoryName,
  };
};

export default useCreateCategory;
