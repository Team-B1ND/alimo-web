import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { newCategoryNameState } from "src/store/category/category.store";
const useCreateCategory = () => {
  const [createCategoryName, setCreateCategoryName] = useRecoilState(newCategoryNameState);

  const handleChangeCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateCategoryName(e.target.value);
  };

  return {
    createCategoryName,
    handleChangeCategoryName,
  };
};

export default useCreateCategory;