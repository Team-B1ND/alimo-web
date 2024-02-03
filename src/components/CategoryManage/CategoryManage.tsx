import React from "react";
import * as S from "src/style/Category.style/Category.style";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";

const CategoryManage = () => {
  return (
    <S.Main>
      <SideBar />
      <Header />
      <S.CategoryManageView>
        <S.CateogyManageUtilityWrap>
          <S.SearchCateogy placeholder="카테고리 검색" />
          <S.CreateCategoryButton>새 카테고리 </S.CreateCategoryButton>
        </S.CateogyManageUtilityWrap>
      </S.CategoryManageView>
    </S.Main>
  );
};

export default CategoryManage;
